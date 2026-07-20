import { motion } from "motion/react";
import type { JSX } from "react";
import { NavLink } from "react-router";
import logoLightImg from "~/assets/logo-light.png";
import logoDarkImg from "~/assets/logo-dark.png";

import { HamburgerMenu } from "~/components/common/header/HamburgerMenu";
import { navigationItems } from "~/config/navigation";

export function Header(): JSX.Element {
	return (
		<header className="bg-bg text-fg px-6 dark:shadow-md font-nav h-fit w-full sticky top-0 z-50">
			<div className="w-full max-w-[1024px] h-24 mx-auto py-4 flex gap-8">
				<a href="/" className="h-full w-fit dark:hidden">
					<img src={logoLightImg} alt="Logo Icon" className="h-full" />
				</a>
				<a href="/" className="h-full w-fit hidden dark:block">
					<img src={logoDarkImg} alt="Logo Icon" className="h-full" />
				</a>
				<nav className="hidden lg:flex gap-6 h-full items-center ml-6">
					<ul className="contents">
						{navigationItems.map((item) => (
							<li key={item.to} className="h-full">
								<NavLinkItem to={item.to} isNew={item.isNew}>
									{item.label}
								</NavLinkItem>
							</li>
						))}
					</ul>
				</nav>

				{/* スマホ用ハンバーガーメニュー（lg未満で表示） */}
				<div className="block lg:hidden ml-auto">
					<HamburgerMenu />
				</div>
			</div>
		</header>
	);
}

function NavLinkItem({ to, isNew = false, children }: { to: string; isNew?: boolean; children: React.ReactNode }): JSX.Element {
	return (
		<NavLink to={to} viewTransition className={`w-full h-full flex items-center justify-center relative px-4
			${isNew && "after:content-['NEW'] after:absolute after:top-0 after:-right-1 after:bg-red-500 after:text-white after:text-xs after:px-1.5 after:py-0.5 after:rounded-sm after:font-bold after:border-bg after:border-2"}`}>
			{
				({ isActive }) => (
					<>
						{
							isActive && <motion.div
								className="absolute bg-brand-main dark:bg-brand-adjusted w-20 h-10 rounded-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								style={{ viewTransitionName: "active-nav-indicator" }}
								transition={{ type: "spring", duration: 0.5 }}
								initial={{ rotate: -10 }}
								animate={{ rotate: -10 }}
							/>
						}
						<motion.span className={`z-10 whitespace-nowrap text-fg`}
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
