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

export function LinkButton({ platform, url, size, color = "#000000" }: LinkButtonProps ): JSX.Element {
    const icon = platform === "twitter" ? <FiTwitter size={size} style={{ color }} /> : <FaInstagram size={size} style={{ color }} />

    return (
        <Link to={url} target="_blank" rel="noopener noreferer">
            <button
                className={`flex items-center justify-center transition duration-300`}
            >
                {icon}
            </button>
        </Link>

    );
}

export default LinkButton;