import type { JSX, ReactNode } from "react";

export function Badge({ bgColor, fgColor, children }: { bgColor: string; fgColor: string; children: ReactNode }): JSX.Element {
	return (
		<div className="w-max h-6 px-1.5 py-1 flex place-items-center justify-center rounded text-sm"
			style={{ backgroundColor: bgColor, color: fgColor }}>
			{children}
		</div>
	)
}