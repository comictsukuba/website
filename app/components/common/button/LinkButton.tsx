import type { JSX } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router";

type LinkButtonProps = {
    platform: "twitter" | "instagram";
    url: string;
    size: number;
    color?: string;
};

export function LinkButton({ platform, url, size, color }: LinkButtonProps ): JSX.Element {
    const icon = platform === "twitter" 
        ? <FiTwitter size={size} style={color ? { color } : undefined} /> 
        : <FaInstagram size={size} style={color ? { color } : undefined} />

    return (
        <Link to={url} target="_blank" rel="noopener noreferer">
            <button
                className={`flex items-center justify-center transition duration-300 ${!color ? "text-[#000000] dark:text-white" : ""}`}
            >
                {icon}
            </button>
        </Link>
    );
}

export default LinkButton;