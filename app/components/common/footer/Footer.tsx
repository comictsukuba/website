import { InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router";

export function Footer(): JSX.Element {
    return (
        <footer className="w-full h-fit bg-[#469fa3] text-white py-8 px-8 flex flex-col gap-8 items-center">
            <div className="w-[1024px] max-w-full mx-auto flex flex-col gap-x-16 gap-y-8">
                <div className="w-fit flex flex-col gap-2">
                    <p className="font-bold text-xl">
                        コミックつくば！準備会
                    </p>
                    <ul className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-sm">
                        <li className="contents">
                            <MailIcon size={20} />
                            <span>info@comic-tsukuba.com</span>
                        </li>
                        <li className="contents">
                            <TwitterIcon size={20} />
                            <Link to="https://x.com/comictsukuba">@comictsukuba</Link>
                        </li>
                        <li className="contents">
                            <InstagramIcon size={20} />
                            <Link to="https://www.instagram.com/comictsukuba">comictsukuba</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-[1px] bg-white self-center" />
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-4">
                    <NavGroup title="◇" links={[
                        { label: "ホーム", href: "/" },
                        { label: "お知らせ", href: "/news" },
                        { label: "コミックつくば！とは？", href: "/about" },
                        { label: "お問い合わせ", href: "/contact" },
                    ]} />
                    <NavGroup title="一般参加" links={[
                        { label: "開催情報", href: "/events/CT1" },
                        { label: "出展一覧", href: "/events/CT1/catalog" },
                    ]} />
                    <NavGroup title="出展参加" links={[
                        { label: "出展参加申し込み", href: "/exhibit" },
                    ]} />
                </div>
            </div>
            <div>
                <p>Copyright &copy; 2025 コミックつくば！準備会 All Rights Reserved.</p>
            </div>
        </footer>
    );
}

function NavGroup({ title, links }: { title: string, links: { label: string, href: string }[] }) {
    return (
        <div className="flex flex-col gap-2 w-48">
            <h2 className="font-bold">{title}</h2>
            <ul className="flex flex-col gap-0">
                {links.map(link => (
                    <li key={link.label}>
                        <Link viewTransition className="hover:underline" to={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
