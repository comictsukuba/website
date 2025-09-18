import { Menu, XIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState, type JSX } from "react";
import { NavLink } from "react-router";

export function HamburgerMenu(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<>
			{/* ハンバーガーメニューアイコン */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="text-black h-full px-4 flex items-center justify-center">
				<div className="absolute w-20 h-10 -rotate-10 rounded-[50%] bg-brand-main" />
				<Menu size={24} className="z-0" />
			</button>

			{/* オーバーレイ */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/10 bg-opacity-50 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* スライドメニュー */}
			<motion.div
				className={"fixed top-0 right-0 w-[320px] h-full bg-white p-4 z-50 flex flex-col items-end gap-4"}
				initial={{ x: "100%" }}
				animate={{ x: isOpen ? 0 : "100%" }}
				transition={{ duration: 0.15, type: "tween", ease: "easeOut" }}
			>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-black w-fit h-fit px-6 py-4 flex items-center justify-center">
					<XIcon size={24} className="z-0" />
				</button>
				<nav className="w-full flex flex-col gap-0 text-black">
					<ul className="contents">
						<li className="h-fit">
							<NavLinkItem to="/" handleClose={handleClose}>HOME</NavLinkItem>
						</li>
						<li className="h-fit">
							<NavLinkItem to="/news" handleClose={handleClose}>お知らせ</NavLinkItem>
						</li>
						<li className="h-fit">
							<NavLinkItem to="/about" handleClose={handleClose}>コミックつくばとは？</NavLinkItem>
						</li>
						<li className="h-fit">
							<NavLinkItem isNew to="/events/001" handleClose={handleClose}>開催情報</NavLinkItem>
						</li>
					</ul>
				</nav>
			</motion.div>
		</>
	);
}

function NavLinkItem({ to, isNew = false, children, handleClose }: { to: string; isNew?: boolean; children: React.ReactNode; handleClose: () => void }): JSX.Element {
	return (
		<NavLink to={to} className={`w-full h-full flex items-center justify-center relative px-4 py-4
			${isNew && "after:content-['NEW'] after:absolute after:left-2 after:bg-red-500 after:text-white after:text-xs after:px-1.5 after:py-0.5 after:rounded-sm after:font-bold after:border-white after:border-2"}`} onClick={handleClose}>
			{
				({ isActive }) => (
					<>
						{
							isActive && <motion.div
								className="absolute bg-brand-main w-20 h-10 rounded-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
								transition={{ type: "spring", duration: 0.5 }}
								initial={{ rotate: -10 }}
								animate={{ rotate: -10 }}
								layoutId="hamburger-nav-link-active-indicator"
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
