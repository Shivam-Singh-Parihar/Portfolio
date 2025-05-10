import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>

					<meta property="og:title" content="Shivam Singh Portfolio" />
					<meta property="og:description" content="Shivan is a Full Stack Developer who specializes in building (and occasionally designing) exceptional digital experiences." />
					<meta property="og:image" content="https://ik.imagekit.io/shivamsingh45/Portfolio/1676181822836.jpeg?updatedAt=1723216533908" />
					<meta property="og:url" content="https://shivam-hyphun.github.io/shivam-singh-portfolio/" />
					<meta property="og:type" content="website" />
					<link rel='icon' href='/favicon.png' sizes='16x16' />
					<link rel='icon' href='/favicon-32x32.png' sizes='32x32' />
					<link rel='icon' href='/favicon-48x48.png' sizes='48x48' />
					<link rel='apple-touch-icon' href='/favicon-192x192.png' sizes='192x192' />
					<link rel='manifest' href='/site.webmanifest' />
					<html lang='en' />
					<Script id='google-analytics' strategy='afterInteractive'>
						{`window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-PKWH4TCGB5');
       					`}
					</Script>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-PKWH4TCGB5'
						strategy='afterInteractive'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
