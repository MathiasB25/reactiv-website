// Nextjs
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <section className={"flex flex-col justify-between bg-background h-screen py-8 lg:py-16 px-6 sm:px-10 lg:px-20"}>
                <Top />
                <div className={"flex flex-col items-center gap-8"}>
                    <Image src={"/logo.png"} width={185} height={185} alt={"Logo"} />
                    <div className={"sm:border py-5 text-center w-full md:w-[90%]"}>
                        <span className={"uppercase text-white font-black text-5xl sm:text-6xl md:text-7xl tracking-wider"}>Reactiv</span>
                    </div>
                    <Link href={"#tracking"} className={"text-sm sm:text-base border py-3 px-3 sm:px-8 text-center text-neutral-200 tracking-wider hover:bg-white hover:text-background transition-colors rounded-sm font-bold uppercase"}>Seguimiento de mi paquete</Link>
                </div>
                <Bottom />
            </section>
        </div>
    )
}

function Top() {
    return (
        <div className={"flex items-center justify-center sm:justify-between"}>
            <div className={"flex items-center justify-center sm:justify-start gap-1 w-[188px]"}>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
            </div>
            <div className={"hidden md:block h-[2px] bg-neutral-600 w-[10rem] lg:w-[20rem] xl:w-[40rem]"}></div>
            <div className={"hidden sm:flex items-center gap-2"}>
                <div className={"flex items-center w-[30px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
                <div className={"flex items-center w-[150px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Bottom() {
    return (
        <div className={"flex items-center justify-center sm:justify-between"}>
            <div className={"flex items-center gap-2"}>
                <div className={"flex items-center w-[150px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
                <div className={"flex items-center w-[30px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
            </div>
            <div className={"hidden md:block h-[2px] bg-neutral-600 w-[10rem] lg:w-[20rem] xl:w-[40rem]"}></div>
            <div className={"hidden sm:flex items-center justify-end gap-1 w-[188px]"}>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
            </div>
        </div>
    )
}