import type { JSX } from "react";

export type DataListItem = {
	icon: JSX.Element;
	label: string | JSX.Element;
	value: string | JSX.Element;
};

export function DataList({ items }: { items: DataListItem[] }): JSX.Element {
	return (
		<div className="w-full px-4 grid grid-cols-[max-content_minmax(auto,max-content)] auto-rows-[minmax(32px,auto)] gap-x-16 gap-y-1">
			<table className="contents">
				<tbody className="contents">
					{items.map((item, index) => (
						<tr className="contents" key={index}>
							<th className="contents">
								<div className="col-span-1 h-full flex flex-row items-end justify-start gap-3 font-normal">
									<div className="text-fg-subtle -translate-y-0.5">
										{item.icon}
									</div>
									<span className="text text-fg-subtle">
										{item.label}
									</span>
								</div>
							</th>
							<td className="contents">
								<div className="col-span-1 h-full flex flex-row items-end justify-start gap-2">
									<span className="text text-fg-muted whitespace-pre-line">
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
