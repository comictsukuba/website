
import type { JSX } from "react";
import { Link } from "react-router";
import { HamburgerMenu } from "~/components/common/header/HamburgerMenu";

export function Header(): JSX.Element {
    return (
        <header className="bg-[#00C1D4] text-white py-4 px-6 shadow-md font-nav h-[48px] ">
            <div className="container mx-auto flex items-center justify-between h-full">

                {/* PC用ナビゲーション（md以上で表示） */}
                <nav className="hidden md:flex flex-1 justify-center font-bold">
                    <ul className="flex space-x-12 text-lg">
                        <li className="px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#00C1D4]">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#00C1D4]">
                            <Link to="/news">NEWS</Link>
                        </li>
                        <li className="px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#00C1D4]">
                            <Link to="/application">参加案内</Link>
                        </li>
                        <li className="px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-white hover:text-[#00C1D4]">
                            <Link to="/about">コミックつくば！とは？</Link>
                        </li>
                    </ul>
                </nav>

                {/* スマホ用ハンバーガーメニュー（md未満で表示） */}
                <div className="md:hidden ">
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
}


