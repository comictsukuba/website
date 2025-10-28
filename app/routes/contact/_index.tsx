import { Link } from "react-router";

export default function Route() {
	return (
		<div className="container mx-auto py-8 text-center">

			{/* メタデータ -----✧ */}
			<title>お問い合わせ ✧ コミックつくば！</title>
			<meta name="description" content="コミックつくば！公式サイトです。"></meta>
			{/* ✧-------------- */}

			<h1 className="text-3xl font-bold">Contact</h1>
			<p className="mt-8">
				ご連絡は準備会メールアドレスへ（comictsukubastaff@gmail.com）
				お気軽にお問い合わせください。
			</p>
		</div>
	);
}
