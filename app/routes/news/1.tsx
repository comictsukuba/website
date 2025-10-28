import type { JSX } from "react";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-3xl font-bold">Webサイト開設のお知らせ</h1>
			<p className="mt-8">
				コミックつくば！Webサイトを開設しました。
			</p>
			<p>
				こちらでイベントの情報や準備会について発信します！
			</p>
		</div>
	);
}
