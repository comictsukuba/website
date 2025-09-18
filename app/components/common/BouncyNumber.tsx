import { motion } from "motion/react";
import type { JSX } from "react";

export function BouncyNumber({ value }: { value: string }): JSX.Element {
	return (
		<span className="font-bold text-2xl text-brand-adjusted">
			{value.split("").map((char, i) => (
				<motion.span
					key={i}
					animate={{ y: [0, -10, 0]}}
					transition={{
						duration: 0.5,
						repeat: Infinity,
						repeatDelay: 1.5,
						delay: i * 0.2, // 1文字ずつずらす
						ease: "easeInOut",
					}}
					className="inline-block"
				>
					{char}
				</motion.span>
			))}
		</span>
	);
}