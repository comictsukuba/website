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
	links?: ({
		type: "x";
		id: string;
	} | {
		type: "instagram";
		id: string;
	} | {
		type: "url";
		url: URL;
	})[];
	cardUrl: string;
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
		<div className="w-full h-full p-4 border-[length:1px] border-fg-blink grid grid-cols-[auto_1fr_auto] gap-x-4 grid-rows-[auto_1fr] rounded-lg">
			{/* icon */}
			<div className="w-14 h-14 bg-fg-blink rounded-lg overflow-hidden">
				{
					data.cardUrl && <img src={data.cardUrl} alt={`${data.name} カード画像`} className="w-full h-full object-cover object-bottom [image-rendering:-webkit-optimize-contrast]" />
				}
			</div>
			<div className="flex flex-col h-fit gap-3 transition-all duration-300">
				<div className="flex min-h-14 flex-col justify-between w-fit gap-1">
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
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.15, ease: "easeOut" }}
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
		<div className="w-full h-fit flex flex-col gap-1 mt-3">
			<div className="text-sm text-fg-muted">
				{data.description}
			</div>
			{
				(data.links && data.links.length > 0) && (
					<div className="w-full h-fit flex flex-row gap-2 flex-wrap">
						{
							data.links.map(link => {
								if (link.type === "x") {
									return (
										<a href={`https://x.com/${link.id}`} target="_blank" rel="noopener noreferrer"
											className="text-sm text-blue-500 underline">
											{`X: @${link.id}`}
										</a>
									);
								} else if (link.type === "instagram") {
									return (
										<a href={`https://www.instagram.com/${link.id}`} target="_blank" rel="noopener noreferrer"
											className="text-sm text-pink-500 underline">
											{`Instagram: @${link.id}`}
										</a>
									);
								} else if (link.type === "url") {
									return (
										<a href={link.url.toString()} target="_blank" rel="noopener noreferrer"
											className="text-sm text-green-500 underline">
											{"Website"}
										</a>
									);
								}
							})
						}
					</div>
				)
			}
		</div>
	);
}
