import { motion } from "motion/react";
import type { JSX } from "react";
import { NavLink } from "react-router";
import logoImg from "~/assets/logo.png";

import { HamburgerMenu } from "~/components/common/header/HamburgerMenu";

export function Header(): JSX.Element {
	return (
		<header className="bg-white text-black px-6 shadow-md font-nav h-fit w-full">
			<div className="w-full max-w-[1024px] h-20 mx-auto py-2 flex gap-8">
				<a href="/" className="h-full w-fit">
					<img src={logoImg} alt="Logo Icon" className="h-full" />
				</a>
				<nav className="hidden md:flex gap-6 h-full items-center ml-6">
					<ul className="contents">
						<li className="h-full">
							<NavLinkItem to="/">
								ホーム
							</NavLinkItem>
						</li>
						<li className="h-full">
							<NavLinkItem to="/news">
								お知らせ
							</NavLinkItem>
						</li>
						<li className="h-full">
							<NavLinkItem to="/about">
								コミックつくば！とは
							</NavLinkItem>
						</li>
						<li className="h-full">
							<NavLinkItem to="/contact">
								お問い合わせ
							</NavLinkItem>
						</li>
					</ul>
				</nav>

				{/* スマホ用ハンバーガーメニュー（md未満で表示） */}
				<div className="block md:hidden ml-auto">
					<HamburgerMenu />
				</div>
			</div>
		</header>
	);
}

function NavLinkItem({ to, children }: { to: string; children: React.ReactNode }): JSX.Element {
	return (
		<NavLink to={to} className="w-full h-full flex items-center justify-center relative px-4">
			{
				({ isActive }) => (
					<>
						{
							isActive && <motion.div
								className="absolute bg-brand-main w-20 h-10 rounded-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								transition={{ type: "spring", duration: 0.5 }}
								initial={{ rotate: -10 }}
								animate={{ rotate: -10 }}
								layoutId="nav-link-active-indicator"
							/>
						}
						<motion.span className={`z-10 whitespace-nowrap text-black`}
							animate={{
								fontWeight: isActive ? 700 : 500,
							}}>
							{children}
						</motion.span>
					</>
				)
			}
		</NavLink>
	);
}
