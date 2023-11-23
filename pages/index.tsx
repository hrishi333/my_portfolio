import Head from "next/head";
import Script from "next/script";
import {Home} from "@/components/home/Home";

export default function home() {
    return (
        <>
            <Head>
                <title>Hrishikesh's Portfolio</title>
                <meta name="description"
                      content="Experienced full stack web developer specializing in MERN stack technologies."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/project-imgs/HJ.png"/>

                {/* Open Graph meta tags for better sharing on social media */}
                <meta property="og:title" content="Hrishikesh's Portfolio"/>
                <meta property="og:description"
                      content="Experienced full stack web developer specializing in MERN stack technologies."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/project-imgs/HJ.png"/>
                <meta property="og:url" content="https://www.hrishikeshjoshi.in"/>

                {/* Twitter Card meta tags for better sharing on Twitter */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@hrishik24056392"/>
                <meta name="twitter:title" content="Hrishikesh's Portfolio"/>
                <meta name="twitter:description"
                      content="Experienced full stack web developer specializing in MERN stack technologies."/>
                <meta name="twitter:image" content="/project-imgs/HJ.png"/>

                {/* LinkedIn meta tags */}
                <meta property="linkedin:title" content="Hrishikesh's Portfolio"/>
                <meta property="linkedin:description"
                      content="Experienced full stack web developer specializing in MERN stack technologies."/>
                <meta property="linkedin:image" content="/project-imgs/HJ.png"/>
                <meta property="linkedin:url" content="https://www.hrishikeshjoshi.in"/>

                {/* GitHub meta tags */}
                <meta property="github:card" content="summary"/>
                <meta property="github:site" content="@hrishi333"/>
                <meta property="github:title" content="Hrishikesh's Portfolio"/>
                <meta property="github:description"
                      content="Experienced full stack web developer specializing in MERN stack technologies."/>
                <meta property="github:image" content="/project-imgs/HJ.png"/>


                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
                />

                <Script id="ga-script" strategy="lazyOnload">
                    {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
                </Script>

            </Head>

           {/* content from here*/}
            <Home/>
        </>
    );
}
