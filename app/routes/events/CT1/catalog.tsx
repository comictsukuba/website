import { LucidePlus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type JSX } from "react";
import type { BoothViewModel } from "~/components/catalog/BoothInfoCard";
import { BoothInfoCard, type BoothTagViewModel } from "~/components/catalog/BoothInfoCard";
import { Badge } from "~/components/common/badge/Badge";
import { boothCategoryMap, BoothModelSchema, type BoothModel } from "~/models/boothModel";
import type { Route } from "./+types/catalog";

import { booths } from "data/boothDataCT1.json";

export async function loader({ params }: Route.LoaderArgs): Promise<{
    booths: BoothModel[];
    categories: typeof boothCategoryMap;
}> {
    const boothData: BoothModel[] = booths.map((booth) => BoothModelSchema.parse(booth));

    return {
        booths: boothData,
        categories: boothCategoryMap
    }
}

export default function Index({ loaderData }: Route.ComponentProps): JSX.Element {
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [filterTags, setFilterTags] = useState<BoothTagViewModel[]>([]);
    const [filterInput, setFilterInput] = useState("");

    const dataList: BoothViewModel[] = loaderData.booths.map((booth) => ({
        id: booth.id,
        space: booth.participant.day1.type === "booth"
            ? booth.participant.day1.spaceId
            : (booth.participant.day2.type === "booth"
                ? booth.participant.day2.spaceId
                : undefined),
        name: booth.name,
        description: booth.profile?.description ?? "",
        tags: [
            ...(booth.participant.day2.type == "none" ? [{
                id: "90",
                name: "1日目のみ",
                bgColor: "#fee2e2",
                fgColor: "#991b1b",
            }] : []),
            ...booth.profile?.categoryIdList?.map((catId) => {
                const category = loaderData.categories[catId];
                // category.color is expected to be a hex string like "#rrggbb".
                // compute a darker foreground color while preserving hue by converting to HSL
                const darken = (hex: string, amount = 0.25) => {
                    try {
                        const h = hex.replace('#', '').toLowerCase();
                        if (h.length !== 6) return '#000000';

                        const hexToRgb = (hexStr: string) => {
                            const r = parseInt(hexStr.substring(0, 2), 16);
                            const g = parseInt(hexStr.substring(2, 4), 16);
                            const b = parseInt(hexStr.substring(4, 6), 16);
                            return { r, g, b };
                        };

                        const rgbToHsl = (r: number, g: number, b: number) => {
                            r /= 255; g /= 255; b /= 255;
                            const max = Math.max(r, g, b), min = Math.min(r, g, b);
                            let h = 0, s = 0, l = (max + min) / 2;

                            if (max !== min) {
                                const d = max - min;
                                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                                switch (max) {
                                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                                    case g: h = (b - r) / d + 2; break;
                                    case b: h = (r - g) / d + 4; break;
                                }
                                h /= 6;
                            }
                            return { h: h * 360, s: s * 100, l: l * 100 };
                        };

                        const hslToRgb = (h: number, s: number, l: number) => {
                            h /= 360; s /= 100; l /= 100;
                            if (s === 0) {
                                const v = Math.round(l * 255);
                                return { r: v, g: v, b: v };
                            }
                            const hue2rgb = (p: number, q: number, t: number) => {
                                if (t < 0) t += 1;
                                if (t > 1) t -= 1;
                                if (t < 1 / 6) return p + (q - p) * 6 * t;
                                if (t < 1 / 2) return q;
                                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                                return p;
                            };
                            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                            const p = 2 * l - q;
                            const r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
                            const g = Math.round(hue2rgb(p, q, h) * 255);
                            const b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
                            return { r, g, b };
                        };

                        const rgbToHex = (r: number, g: number, b: number) => {
                            const toHex = (n: number) => n.toString(16).padStart(2, '0');
                            return `#${toHex(Math.max(0, Math.min(255, r)))}${toHex(Math.max(0, Math.min(255, g)))}${toHex(Math.max(0, Math.min(255, b)))}`;
                        };

                        const { r, g, b } = hexToRgb(h);
                        const { h: hue, s, l } = rgbToHsl(r, g, b);
                        // reduce lightness while keeping hue and saturation
                        const newL = Math.max(0, l - amount * 100);
                        const { r: nr, g: ng, b: nb } = hslToRgb(hue, s, newL);
                        return rgbToHex(nr, ng, nb);
                    } catch (e) {
                        return '#000000';
                    }
                };

                return {
                    id: category.id,
                    name: category.name,
                    bgColor: category.color,
                    fgColor: darken(category.color, 0.7),
                } as BoothTagViewModel;
            }) || [],
        ],
        links: booth.profile?.links?.map((link) => {
            switch (link.type) {
                case "x":
                    return {
                        type: "x" as const,
                        id: link.id,
                    };
                case "instagram":
                    return {
                        type: "instagram" as const,
                        id: link.id,
                    };
                case "url":
                    return {
                        type: "url" as const,
                        url: new URL(link.url),
                    };
            }
        }),
        cardUrl: booth.profile?.card ?? "",
    })).sort((a, b) => {
        if (a.space === undefined && b.space === undefined) {
            return a.name.localeCompare(b.name);
        }
        if (a.space === undefined) {
            return 1;
        }
        if (b.space === undefined) {
            return -1;
        }
        return a.space - b.space;
    });

    const filteredDataList = dataList.filter((data) => {
        return filterTags.every((tag) => data.tags.some((t) => t.id === tag.id))
    }).filter((data) => {
        if (filterInput.trim() === "") {
            return true;
        }
        const lowerInput = filterInput.toLowerCase();
        return data.name.toLowerCase().includes(lowerInput) || data.description.toLowerCase().includes(lowerInput);
    });

    // ref for the filter menu container so we can detect outside clicks
    const menuContainerRef = useRef<HTMLDivElement | null>(null);

    // close the filter menu when clicking outside
    useEffect(() => {
        if (!showFilterMenu) return;
        function handleDocumentClick(e: MouseEvent) {
            const target = e.target as Node | null;
            if (menuContainerRef.current && target && !menuContainerRef.current.contains(target)) {
                setShowFilterMenu(false);
            }
        }
        document.addEventListener("pointerdown", handleDocumentClick);
        return () => document.removeEventListener("pointerdown", handleDocumentClick);
    }, [showFilterMenu]);

    return (
        <div className="w-[1024px] max-w-full flex flex-col gap-6 px-4 py-6 mx-auto">

            {/* メタデータ -----✧ */}
            <title>出展一覧 ✧ コミックつくば！</title>
            <meta name="description" content="コミックつくば！公式サイトです。"></meta>
            <meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
            <meta property="og:url" content="https://www.comic-tsukuba.com/events/CT1/catalog"></meta>
            <meta property="og:title" content="出展一覧"></meta>
            <meta property="og:description" content="コミックつくば！公式サイトです。"></meta>
            <meta property="og:site_name" content="コミックつくば！"></meta>
            <meta name="twitter:card" content="summary"></meta>
            {/* ✧-------------- */}

            <h1 className="text-2xl font-bold">
                {
                    "出展一覧"
                }
            </h1>
            <div className="flex flex-col gap-6">
                <div className="w-full h-fit flex flex-col gap-2">
                    <input className="w-full h-12 px-6 bg-bg-muted rounded-xl placeholder-fg-subtle"
                        type="text"
                        placeholder="出展名・キーワードで検索..."
                        value={filterInput}
                        onChange={(e) => setFilterInput(e.target.value)}
                    />
                    <div ref={menuContainerRef} className="w-fit h-fit flex flex-row gap-3 items-center relative">
                        <button className="w-fit h-fit px-2 py-1.5 border border-fg-subtle rounded-full text-fg-subtle flex flex-row items-center"
                            onClick={() => {
                                setShowFilterMenu(!showFilterMenu);
                            }}>

                            <LucidePlus className="text-fg-subtle" size={20} />
                            {
                                "絞り込みを追加"
                            }
                        </button>
                        {
                            filterTags.map((tag) => (
                                <button key={tag.id} onClick={() => setFilterTags(filterTags.filter((t) => t.id !== tag.id))}>
                                    <Badge bgColor={tag.bgColor} fgColor={tag.fgColor}>
                                        {tag.name}
                                    </Badge>
                                </button>
                            ))
                        }
                        {
                            <AnimatePresence>
                                {
                                    showFilterMenu && <motion.div className="w-72 h-fit bg-white rounded-lg shadow-md p-4 absolute inset-[unset] left-0 top-full flex flex-row gap-2 flex-wrap content-start"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0, transition: { duration: 0.15 } }}
                                        exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                                        key="filter-menu">

                                        {
                                            dataList.flatMap((data) => data.tags)
                                                .reduce((acc, tag) => { // 同一要素を押しつぶし
                                                    if (!acc.some((t) => t.id === tag.id)) {
                                                        acc.push(tag);
                                                    }
                                                    return acc;
                                                }, [] as BoothTagViewModel[])
                                                .filter((tag) => !filterTags.some((t) => t.id === tag.id))
                                                .sort((a, b) => a.id.localeCompare(b.id))
                                                .map((tag) => (
                                                    <button onClick={() => setFilterTags([...filterTags, tag])} key={tag.id}>
                                                        <Badge bgColor={tag.bgColor} fgColor={tag.fgColor}>
                                                            {tag.name}
                                                        </Badge>
                                                    </button>
                                                ))
                                        }
                                    </motion.div>
                                }
                            </AnimatePresence>
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {
                        filteredDataList.map((data) => (
                            <div className="col-span-1 md:hidden" key={data.id} >
                                <BoothInfoCard data={data} alwaysExpanded={false} />
                            </div>
                        ))
                    }
                    {

                        filteredDataList.map((data) => (
                            <div className="col-span-1 hidden md:block" key={data.id} >
                                <BoothInfoCard data={data} alwaysExpanded={true} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
