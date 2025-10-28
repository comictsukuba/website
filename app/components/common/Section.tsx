import type { JSX } from "react";

export function Section ({ heading, children }: { heading: string; children?: React.ReactNode }): JSX.Element {
	return (
		<section className="w-full h-fit flex flex-col items-start justify-start gap-4">
			<h2 className="text-xl font-bold text-fg">{heading}</h2>
			{children}
		</section>
	);
}