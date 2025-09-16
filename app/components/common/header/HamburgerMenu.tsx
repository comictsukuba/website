import { Menu, X } from "lucide-react";
import { useState, type JSX } from "react";
import { Link } from "react-router";

export function HamburgerMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ハンバーガーメニューアイコン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* オーバーレイ */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* スライドメニュー */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#00C1D4] shadow-md p-4 transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col space-y-8 text-white">
          <li>
            <Link to="/">- HOME</Link>
          </li>
          <li>
            <Link to="/about">- コミックつくばとは？</Link>
          </li>
          <li>
            <Link to="/application">- 参加案内</Link>
          </li>
          <li>
            <Link to="/contact">- お問い合わせ</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
