import type { JSX } from "react";
import LinkButton from "~/components/common/button/LinkButton";

export function Footer(): JSX.Element {
    return (
        <footer className="bg-[#00C1D4] font-nav text-white text-xs py-6 md:px-40 flex items-center justify-between shadow-md pl-10 md:pl-40 space-y-5">
            <div className="space-y-5">
                <div>
                    <p className="text-[12px] font-bold">
                        コミックつくば！準備会
                    </p>
                    <p> mail: comictsukubastaff@gmail.com</p>
                </div>
                <div>
                    <p>Copyright &copy; 2025 <strong>コミックつくば！準備会</strong> All Rights Reserved.</p>
                </div>
            </div>

            <div className="mt-20 flex space-x-10 md:mr-30 mr-10 ml-20">
                <LinkButton platform="twitter" url="https://x.com/comictsukuba" size={36} color="#FFFFFF" />
                <LinkButton platform="instagram" url="https://instagram.com" size={36} color="#FFFFFF" />
            </div>
        </footer>
    );
}
