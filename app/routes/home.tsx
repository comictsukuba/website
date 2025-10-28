import { Link } from "react-router";
import LinkButton from "~/components/common/button/LinkButton";
import type { Route } from "./+types/home";

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  return (
    <div className="max-w-screen-xl mx-auto pb-12"> {/* body全体 */}

      {/* メタデータ -----✧ */}
      <title>ホーム ✧ コミックつくば！</title>
      <meta name="description" content="コミックつくば！公式サイトです。"></meta>
      {/* ✧-------------- */}

      <Link to={"/events/CT1"} className="block h-fit bg-brand-adjusted text-white text-center text-xl md:text-3xl font-bold py-4"> {/* 一番上のとこ */}
        <span>{"＞＞＞ 第１回コミックつくば！ 雙峰祭にて開催決定！ ＜＜＜"}</span>
      </Link>
      <div className="flex flex-col md:flex-row items-center gap-x-12 mt-8"> {/* メインのとこ */}
        <div className="flex md:w-[60%] w-full  justify-center items-center"> {/* 左側 */}
          <img
            src={"/pictures/web.png"}
            alt="ポスター画像"
            width={1241}
            height={1754}
            sizes="(min-width: 768px) 50vw, 90vw"
            className="w-full h-auto max-w-xl md:max-w-2xl object-contain"
          />
        </div>
        <div className="w-full h-full md:w-1/2 flex flex-col items-center self-start space-y-20"> {/* 右側 */}
          <img
            src={"/pictures/logo.png"}
            alt="コミックつくばのロゴ"
            width={440}
            height={440}
            className="w-full h-auto"
          />
          <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
            <div className="space-y-4">
              <div className="mt-4 text-xl font-bold">DATE</div>
              <div className="text-5xl font-bold">雙峰祭（11月2日、3日）</div>
            </div>
            <div className="space-y-4">
              <div className="mt-4 text-xl font-bold">PLACE</div>
              <div className="text-5xl font-bold">筑波大学内</div>
            </div>
          </div>

          <div className="mt-20 flex space-x-10 ">
            <div className="transition-transform duration-200 ease-out hover:scale-110"><LinkButton platform="twitter" url="https://x.com/comictsukuba" size={64} /></div>
            <div className="transition-transform duration-200 ease-out hover:scale-110"><LinkButton platform="instagram" url="https://www.instagram.com/comictsukuba" size={64} /></div>
          </div>
        </div>

      </div>

      <div className="mt-12 font-bold md:max-w-[800px] px-6 mx-auto"> {/* News */}
        <h2 className="text-center text-3xl mb-12">NEWS</h2>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
            <span className="md:text-lg text-md text-left pl-6">2025.09.20</span>
            <span className="md:text-xl text-lg text-center">
              <Link to="/news/4" className="hover:underline">第１回コミックつくば！開催日決定！</Link>
            </span>
          </div>
          <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
            <span className="md:text-lg text-md text-left pl-6">2025.04.01</span>
            <span className="md:text-xl text-lg text-center">
              <Link to="/news/3" className="hover:underline">出展者募集開始について</Link>
            </span>
          </div>
          <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
            <span className="md:text-lg text-md text-left pl-6">2025.04.01</span>
            <span className="md:text-xl text-lg text-center">
              <Link to="/news/1" className="hover:underline">webサイト開設のお知らせ</Link>
            </span>
          </div>
        </div>
        <div className="text-right mr-4 mt-2 text-sm hover:underline"><Link to="/news">View more »</Link></div>
      </div>

      <div className="mt-8 flex justify-center items-center text-md md:text-xl font-bold">
        <Link to="/general" className="hover:bg-bg-muted transition-colors duration-200 ease-in-out px-10 md:px-14 py-8 rounded-md hover:underline transition-transform duration-200 ease-out hover:scale-105" >一般参加について</Link>
        <div className="h-16 border-l-2 border-black"></div>
        <Link to="/exhibit" className="hover:bg-bg-muted transition-colors duration-200 ease-in-out px-10 md:px-14 py-8 rounded-md hover:underline transition-transform duration-200 ease-out hover:scale-105" >出展について</Link>
      </div>

    </div>
  )
}
