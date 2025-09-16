import { Link } from "react-router";

export default function Route() {
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-3xl font-bold">Contact</h1>
			<p className="mt-4">
				<strong>Twitter(現X):</strong> <Link to="https://x.com/comictsukuba" className="text-blue-500 hover:text-blue-700 underline">@comictsukuba</Link>
			</p>
		</div>
	);
}