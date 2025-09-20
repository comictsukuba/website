import { LucideChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type JSX } from "react";
import { Badge } from "~/components/common/badge/Badge";

export type BoothViewModel = {
	id: string;
	space?: number;
	name: string;
	description: string;
	tags: BoothTagViewModel[];
	links: {
		x_id?: string;
		instagram_id?: string;
		website?: URL;
	}
}

export type BoothTagViewModel = {
	id: string;
	name: string;
	bgColor: string;
	fgColor: string;
}

export function BoothInfoCard({ data, alwaysExpanded = false }: { data: BoothViewModel, alwaysExpanded?: boolean }): JSX.Element {
	const [isExpanded, setIsExpanded] = useState(alwaysExpanded);

	return (
		<div className="w-full p-4 border-[length:1px] border-fg-blink grid grid-cols-[auto_1fr_auto] gap-x-4 rounded-lg">
			{/* icon */}
			<div className="w-14 h-14 bg-fg-blink rounded-lg"></div>
			<div className="flex flex-col h-fit gap-3 transition-all duration-300">
				<div className="flex min-h-14 flex-col justify-between w-fit">
					<div className="flex flex-row gap-1 items-center">
						<div className="w-6 h-6 min-w-6 flex items-center bg-brand-adjusted dark:bg-brand rounded-full justify-center">
							<span className="text-[0.9375rem] text-bg font-bold">
								{data.space ?? "委"}
							</span>
						</div>
						<span className="font-bold text-lg flex-grow">
							{data.name}
						</span>
					</div>
					<div className="flex flex-row gap-2 flex-wrap">
						{
							data.tags.map((tag) => (
								<Badge key={tag.id} bgColor={tag.bgColor} fgColor={tag.fgColor}>
									{tag.name}
								</Badge>
							))
						}
					</div>
				</div>
			</div>
			{
				!alwaysExpanded && (
					<button className="w-fit h-14 flex items-center justify-center"
						type="button"
						onClick={() => setIsExpanded(!isExpanded)}>

						<LucideChevronLeft className="text-gray-400 transition-all hover:text-gray-500" style={{
							transform: (isExpanded || alwaysExpanded) ? "rotate(-90deg)" : "rotate(0deg)",
						}} />
					</button>
				)
			}
			<AnimatePresence>
				{(isExpanded || alwaysExpanded) && <motion.div className={`text-sm text-fg-muted overflow-hidden col-span-3`}
					initial={{ opacity: 0, height: 0, paddingTop: 0, y: "0.75rem" }}
					animate={{
						opacity: 1, height: "auto", paddingTop: "0.75rem", y: "0rem"
					}}
					exit={{ opacity: 0, height: 0, paddingTop: 0, y: "0.75rem" }}
					transition={{ duration: 0.15 }}
					key={data.id}>
					<DetailsBlock data={data} />
				</motion.div>
				}
			</AnimatePresence>
		</div>
	);
}

function DetailsBlock({ data }: { data: BoothViewModel }): JSX.Element {
	return (
		<div className="w-full h-fit flex flex-col gap-1">
			<div className="text-sm text-fg-muted">
				{data.description}
			</div>
			{
				(data.links.x_id || data.links.instagram_id || data.links.website)
				&& <div className="w-full h-fit flex flex-row gap-2">
					{
						data.links.x_id && (
							<a href={`https://x.com/${data.links.x_id}`} target="_blank" rel="noopener noreferrer"
								className="text-sm text-blue-500 underline">
								{`X: @${data.links.x_id}`}
							</a>
						)
					}
					{
						data.links.instagram_id && (
							<a href={`https://www.instagram.com/${data.links.instagram_id}`} target="_blank" rel="noopener noreferrer"
								className="text-sm text-blue-500 underline">
								{`Instagram: @${data.links.instagram_id}`}
							</a>
						)
					}
					{
						data.links.website && (
							<a href={data.links.website.toString()} target="_blank" rel="noopener noreferrer"
								className="text-sm text-blue-500 underline">
								Website
							</a>
						)
					}
				</div>
			}
		</div>
	);
}