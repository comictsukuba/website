import { Outlet } from "react-router";
import { Footer } from "~/components/common/footer/Footer";
import { Header } from "~/components/common/header/Header";

export default function Layout() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}