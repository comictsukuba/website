import { LucidePlus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type JSX } from "react";
import type { BoothViewModel } from "~/components/catalog/BoothInfoCard";
import { BoothInfoCard, type BoothTagViewModel } from "~/components/catalog/BoothInfoCard";
import { Badge } from "~/components/common/badge/Badge";
import type { Route } from "./+types/catalog";

// TODO: バックエンドから取得できるようになったら置き換えるよ
type BoothModelDummy = {
    id: string;
    name: string;
    participant: {
        day1: ParticipantFormDummy;
        day2: ParticipantFormDummy;
    }
    categoryIdList: string[];
    profile: {
        iconUrl?: string;
        description?: string;
    }
}

type ParticipantFormDummy = {
    type: "booth",
    spaceNum: number;
} | {
    type: "consignment",
} | {
    type: "none",
}

type BoothCategoryModelDummy = {
    id: string;
    name: string;
    bgColor: string;
    fgColor: string;
}

export async function loader({ params }: Route.LoaderArgs): Promise<{
    booths: BoothModelDummy[];
    categories: BoothCategoryModelDummy[];
}> {
    return {
        booths: [
            {
                id: "001",
                name: "Sample Booth",
                participant: {
                    day1: {
                        type: "booth",
                        spaceNum: 1,
                    },
                    day2: {
                        type: "none",
                    }
                },
                categoryIdList: ["illustration"],
                profile: {
                    iconUrl: "https://example.com/icon.png",
                    description: "This is a sample booth description.",
                }
            },
            {
                id: "002",
                name: "Another Booth",
                participant: {
                    day1: {
                        type: "consignment",
                    },
                    day2: {
                        type: "consignment",
                    }
                },
                categoryIdList: ["novel", "game"],
                profile: {
                    description: "This booth is for consignment sales only.",
                }
            }
        ],
        categories: [
            {
                id: "illustration",
                name: "イラスト",
                bgColor: "#E0F2FE",
                fgColor: "#0369A1",
            },
            {
                id: "novel",
                name: "小説",
                bgColor: "#FEF3C7",
                fgColor: "#92400E",
            },
            {
                id: "game",
                name: "ゲーム",
                bgColor: "#E0F2FE",
                fgColor: "#0369A1",
            }
        ]
    };
}

export default function Index({ loaderData }: Route.ComponentProps): JSX.Element {
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [filterTags, setFilterTags] = useState<BoothTagViewModel[]>([]);
    const [filterInput, setFilterInput] = useState("");

    const dataList: BoothViewModel[] = loaderData.booths.map((booth) => ({
        id: booth.id,
        space: booth.participant.day1.type === "booth"
            ? booth.participant.day1.spaceNum
            : (booth.participant.day2.type === "booth"
                ? booth.participant.day2.spaceNum
                : undefined),
        name: booth.name,
        description: "ここに説明文が入ります。この文章はダミーです。この文章はダミーです。この文章はダミーです。",
        tags: [
            ...(booth.participant.day2.type == "none" ? [{
                id: "90",
                name: "1日目のみ",
                bgColor: "#fee2e2",
                fgColor: "#991919",
            }] : []),
            ...booth.categoryIdList.map((catId) => {
                const category = loaderData.categories.find((c) => c.id === catId);
                if (category) {
                    return {
                        id: category.id,
                        name: category.name,
                        bgColor: category.bgColor,
                        fgColor: category.fgColor,
                    };
                }
            }).filter((tag): tag is BoothTagViewModel => tag !== undefined)
        ],
        links: {
            x_id: "example"
        }
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

    return (
        <div className="w-[1024px] max-w-full flex flex-col gap-6 px-4 py-6 mx-auto">
            <h1 className="text-2xl font-bold">
                {
                    "出展一覧"
                }
            </h1>
            <div className="flex flex-col gap-6">
                <div className="w-full h-fit flex flex-col gap-2">
                    <input className="w-full h-12 px-6 bg-gray-100 rounded-xl placeholder-gray-500"
                        type="text"
                        placeholder="サークル名・キーワードで検索..."
                        value={filterInput}
                        onChange={(e) => setFilterInput(e.target.value)}
                    />
                    <div className="w-fit h-fit flex flex-row gap-3 items-center relative">
                        <button className="w-fit h-fit px-2 py-1.5 border border-gray-400 rounded-full text-gray-500 flex flex-row items-center"
                            onClick={() => {
                                setShowFilterMenu(!showFilterMenu);
                            }}>

                            <LucidePlus className="text-gray-400" size={20} />
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