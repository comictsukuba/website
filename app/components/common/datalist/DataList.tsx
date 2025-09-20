import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { JSX } from "react";

export type DataListItem = {
	icon: IconName;
	label: string | JSX.Element;
	value: string | JSX.Element;
};

export function DataList({ items }: { items: DataListItem[] }): JSX.Element {
	return (
		<div className="w-full px-4 grid grid-cols-[max-content_max-content] auto-rows-[32px] gap-x-16 gap-y-1">
			<table className="contents">
				<tbody className="contents">
					{items.map((item, index) => (
						<tr className="contents" key={index}>
							<th className="contents">
								<div className="col-span-1 h-full flex flex-row items-end justify-start gap-3 font-normal">
									<DynamicIcon name={item.icon} size={18} className="text-fg-subtle -translate-y-0.5" />
									<span className="text text-fg-subtle">
										{item.label}
									</span>
								</div>
							</th>
							<td className="contents">
								<div className="col-span-1 h-full flex flex-row items-end justify-start gap-2">
									<span className="text text-fg-muted">
										{item.value}
									</span>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}