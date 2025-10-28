import type { JSX } from "react";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-3xl font-bold">出展参加申し込み開始</h1>
			<p>
				第１回コミックつくば！の出展募集は締め切りました。
			</p>
			<p>
				おかげさまで、募集予定枠を大きく上回る結果となりました。ご応募いただいた皆様、ありがとうございました！
			</p>
		</div>
	);
}
