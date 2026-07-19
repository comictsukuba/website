import { Link } from "react-router";
import LinkButton from "~/components/common/button/LinkButton";
import type { Route } from "./+types/home_default";
import logoLightImg from "~/assets/logo-light.png";
import logoDarkImg from "~/assets/logo-dark.png";
import webImg from "~/assets/web.png";
import { getNewsList } from "~/models/news";

export function loader({ context }: Route.LoaderArgs) {
  const allNews = getNewsList();
  const latestNews = allNews.slice(0, 3);
  return {
    message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
    latestNews,
  };
}

export default function Route({ loaderData }: Route.ComponentProps) {
  const { latestNews } = loaderData;
  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pb-12"> {/* body全体 */}

      {/* メタデータ -----✧ */}
      <title>ホーム ✧ コミックつくば！</title>
      <meta name="description" content="コミックつくば！公式サイトです。"></meta>
      <meta property="og:image" content="https://www.comic-tsukuba.com/pictures/logo.png"></meta>
      <meta property="og:url" content="https://www.comic-tsukuba.com/"></meta>
      <meta property="og:title" content="ホーム"></meta>
      <meta property="og:description" content="コミックつくば！公式サイトです。"></meta>
      <meta property="og:site_name" content="コミックつくば！"></meta>
      <meta name="twitter:card" content="summary"></meta>
      {/* ✧-------------- */}

      {/* 
      <Link to={"/events"} className="block h-fit bg-brand-adjusted text-white text-center text-xl md:text-3xl font-bold py-4 px-4">
        <span>{"＞＞＞ 第１回コミックつくば！ 雙峰祭にて開催決定！ ＜＜＜"}</span>
      </Link>
      */}
      <div className="flex flex-col lg:flex-row lg:items-start items-center gap-x-12 gap-y-16 mt-8"> {/* メインのとこ */}
        <div className="flex lg:w-1/2 w-full justify-center items-center"> {/* 左側 */}
          <img
            src={webImg}
            alt="ポスター画像"
            width={1241}
            height={1754}
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="w-full h-auto max-w-xl lg:max-w-2xl object-contain"
          />
        </div>
        <div className="w-full h-full lg:w-1/2 flex flex-col items-center space-y-20"> {/* 右側 */}
          <img
            src={logoLightImg}
            alt="コミックつくばのロゴ"
            width={440}
            height={440}
            className="w-full h-auto dark:hidden"
          />
          <img
            src={logoDarkImg}
            alt="コミックつくばのロゴ"
            width={440}
            height={440}
            className="w-full h-auto hidden dark:block"
          />
          <div className="text-center flex flex-col items-center space-y-4 w-full">
            <div className="text-6xl lg:text-7xl font-bold text-brand-adjusted">
              第2回計画中
            </div>
            <div className="text-5xl lg:text-6xl font-bold text-black dark:text-white">
              詳細は後日発表
            </div>
          </div>

          <div className="mt-20 flex space-x-10 ">
            <div className="transition-transform duration-200 ease-out hover:scale-110"><LinkButton platform="twitter" url="https://x.com/comictsukuba" size={64} /></div>
            <div className="transition-transform duration-200 ease-out hover:scale-110"><LinkButton platform="instagram" url="https://www.instagram.com/comictsukuba" size={64} /></div>
          </div>
        </div>

      </div>

      <div className="mt-12 font-bold max-w-screen-xl mx-auto"> {/* News */}
        <h2 className="text-center text-3xl mb-12">お知らせ</h2>
        <div className="mt-4 space-y-4">
          {latestNews.map((news) => (
            <div key={news.id} className="grid grid-cols-3 items-center border-black dark:border-white border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
              <span className="col-span-1 lg:text-lg text-md text-left pl-6">{news.date}</span>
              <span className="col-span-2 lg:text-xl text-lg text-left pl-4">
                <Link to={`/news/${news.id}`} className="hover:underline">{news.title}</Link>
              </span>
            </div>
          ))}
        </div>
        <div className="text-right mr-4 mt-2 text-sm hover:underline"><Link to="/news">View more »</Link></div>
      </div>

      <div className="mt-8 flex justify-center items-center text-md lg:text-xl font-bold">
        <Link to="/events" className="hover:bg-bg-muted transition-colors duration-200 ease-in-out px-10 lg:px-14 py-8 rounded-md hover:underline transition-transform duration-200 ease-out hover:scale-105" >一般参加について</Link>
        <div className="h-16 border-l-2 border-black"></div>
        <Link to="/exhibit" className="hover:bg-bg-muted transition-colors duration-200 ease-in-out px-10 lg:px-14 py-8 rounded-md hover:underline transition-transform duration-200 ease-out hover:scale-105" >出展について</Link>
      </div>

    </div>
  )
}
