import Head from "next/head";

export default function Layout({title, children}) {
    return (
        <div className={"bg-background"}>
            <Head>
                <title>{title} | Reactiv</title>
            </Head>
            {children}
        </div>
    )
}