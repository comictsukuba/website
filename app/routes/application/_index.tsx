import type { JSX } from "react";
import { LargeLinkButton } from "~/components/common/button/LargeLinkButton";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-3xl font-bold">
				サークル参加申込
			</h1>
			<p>
				第１回コミックつくば！の出展募集は締め切りました。<br />
				おかげさまで、募集予定枠を大きく上回る結果となりました。ご応募いただいた皆様、ありがとうございました！
			</p>
			<div className="mt-4">
				<LargeLinkButton to="/events/CT1" label="第１回開催情報はこちら！" />
			</div>
		</div>
	);
}