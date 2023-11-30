import Head from "next/head";

export default function Layout({title, children}) {
    return (
        <div className={"bg-[#141418]"}>
            <Head>
                <title>{title} | Reactiv</title>
            </Head>
            {children}
        </div>
    )
}