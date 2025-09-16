import Layout from "@/app/(common)/layout";
import Image from "next/image";
import LinkButton from "@/app/(common)/linkButton"
import Link from "next/link";


export default function HomePage() {
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto py-12 space-y-24"> {/* body全体 */}
                <div className="flex flex-col md:flex-row items-center gap-x-12 mt-8"> {/* メインのとこ */}
                    <div className="flex md:w-[60%] w-full  justify-center items-center"> {/* 左側 */}
                        <Image
                            src={"/pictures/web.png"}
                            alt="ポスター画像"
                            width={1241}
                            height={1754}
                            fill={false}
                            sizes="(min-width: 768px) 50vw, 90vw"
                            className="w-full h-auto max-w-xl md:max-w-2xl object-contain"
                        />
                    </div>
                    <div className="w-full h-full md:w-1/2 flex flex-col items-center self-start space-y-20"> {/* 右側 */}
                        <Image
                            src={"/pictures/logo.png"}
                            alt="コミックつくばのロゴ"
                            width={440}
                            height={440}
                            fill={false}
                            className="w-full h-auto"
                        />
                        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
                            <div className="space-y-4">
                                <div className="mt-4 text-xl font-bold">DATE</div>
                                <div className="text-5xl font-bold">11月上旬開催予定</div>
                            </div>
                            <div className="space-y-4">
                                <div className="mt-4 text-xl font-bold">PLACE</div>
                                <div className="text-5xl font-bold">筑波大学内</div>
                            </div>
                        </div>

                        <div className="mt-20 flex space-x-10 ">
                            <div className="transition-transform duration-200 ease-out hover:scale-110"><LinkButton platform="twitter" url="https://x.com/comictsukuba" size={64} /></div>
                            <div className="transition-transform duration-200 ease-out hover:scale-110"><LinkButton platform="instagram" url="https://instagram.com" size={64} /></div>
                        </div>
                    </div>

                </div>  

                <div className="mt-12 font-bold md:max-w-[800px] px-6 mx-auto"> {/* News */}
                    <h2 className="text-center text-3xl mb-12">NEWS</h2>
                    <div className="mt-4 space-y-4">
                        <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
                            <span className="md:text-lg text-md text-left pl-6">2025.04.01</span>
                            <span className="md:text-xl text-lg text-center">
                                <Link href="/news/3" className="hover:underline">出展者募集開始について</Link>
                            </span>
                        </div>
                        <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
                            <span className="md:text-lg text-md text-left pl-6">2025.04.01</span>
                            <span className="md:text-xl text-lg text-center">
                                <Link href="/news/2" className="hover:underline">スタッフ募集のお知らせ</Link>
                            </span>
                        </div>
                        <div className="grid grid-cols-3 items-center border-black border-b-2 py-2 transition-transform duration-200 ease-out hover:scale-105">
                            <span className="md:text-lg text-md text-left pl-6">2025.04.01</span>
                            <span className="md:text-xl text-lg text-center">
                                <Link href="/news/1" className="hover:underline">webサイト開設のお知らせ</Link>
                            </span>
                        </div>
                    </div>
                    <div className="text-right mr-4 mt-2 text-sm hover:underline"><Link href="/news">View more »</Link></div>
                </div> 
                
                <div className="mt-8 flex justify-center items-center text-md md:text-xl font-bold">      
                    <Link href="/general" className="hover:bg-gray-200 transition-colors duration-200 ease-in-out px-10 md:px-14 py-8 rounded-md hover:underline transition-transform duration-200 ease-out hover:scale-105" >一般参加について</Link>
                    <div className="h-16 border-l-2 border-black"></div>
                    <Link href="/exhibit" className="hover:bg-gray-200 transition-colors duration-200 ease-in-out px-10 md:px-14 py-8 rounded-md hover:underline transition-transform duration-200 ease-out hover:scale-105" >出展について</Link>
                </div>

            </div>
        </Layout>
    );
}