import type { JSX } from "react";
import { BouncyNumber } from "~/components/common/BouncyNumber";
import { LargeLinkButton } from "~/components/common/button/LargeLinkButton";
import { DataList } from "~/components/common/datalist/DataList";
import { Section } from "~/components/common/Section";
import type { Route } from "./+types/_index";

export async function loader({ params }: Route.LoaderArgs): Promise<{ dates: Date[] }> {
	return {
		dates: []
	};
}

export default function Index({ loaderData }: Route.ComponentProps): JSX.Element {
	return (
		<section className="w-full max-w-[1024px] h-fit mx-auto px-4 py-6 flex flex-col gap-6">
			<h1 className="text-2xl font-bold text-gray-800">第１回コミックつくば！開催案内</h1>
			<div className="w-full h-fit flex flex-col gap-6">
				<DataList items={[
					{ icon: "calendar", label: "日時", value: new Date().toLocaleDateString("ja-JP") },
					{ icon: "map-pin", label: "場所", value: "筑波大学" },
					{
						icon: "library-big", label: "参加サークル数", value: (
							<span className="flex flex-row items-baseline gap-1">
								<BouncyNumber value="XX" />
								サークル
							</span>
						)
					}
				]} />
				<div className="w-full h-[1px] bg-gray-300 border-full" />
				<div className="w-full h-fit py-8 flex items-center justify-center">
					<LargeLinkButton to={"./catalog"} label="サークル一覧はこちら" />
				</div>
				<Section heading="フロアマップ">
					<div className="w-full aspect-video bg-gray-200" />
				</Section>
				<Section heading="注意事項">
					<ul className="list-disc list-inside flex flex-col gap-1 pl-2">
					</ul>
				</Section>
			</div>
		</section>
	);
}