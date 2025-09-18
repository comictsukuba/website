import { motion } from "motion/react";
import { forwardRef, type JSX } from "react";
import { Link, type To } from "react-router";

const MotionLink = motion(
	forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>((props, ref) => (
		<Link ref={ref} {...props} />
	))
);

export function LargeLinkButton({ to, label }: { to: To; label: string }): JSX.Element {
	return (
		<MotionLink to={to}
			className="w-fit h-fit px-6 py-3 bg-brand-adjusted text-white rounded-lg text-lg font-medium"
			initial={{ boxShadow: "0 4px 0px #326d70" }}
			whileHover={{ backgroundColor: "var(--color-brand-sub3)", boxShadow: "0 4px 0px #798b8c"}}
			whileTap={{ y: 4, boxShadow: "0 0px 0px #285a5d" }}
			transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
		>
			{label}
		</MotionLink>
	);
}