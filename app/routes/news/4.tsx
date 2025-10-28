import type { JSX } from "react";
import { LargeLinkButton } from "~/components/common/button/LargeLinkButton";

export default function Route(): JSX.Element {
	return (
		<div className="container mx-auto py-8 text-center">
			<h1 className="text-3xl font-bold">第1回開催情報</h1>
			<p>
				第1回コミックつくば！の会場、出展者一覧等を公開しました！
			</p>
			<p>
				ぜひご覧ください！
			</p>
			<div className="mt-4">
				<LargeLinkButton to="/events/CT1" label="第１回開催情報はこちら！" />
			</div>
		</div>
	);
}
