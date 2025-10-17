import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LangAttribute from "@/components/layout/LangAttribute";

export const metadata: Metadata = {
  title: "Geekonomy | Full-Service Branding, Marketing & Development",
  description: "Transforming businesses through cutting-edge technology and innovative solutions.",
  icons: {
    icon: "/favicon.ico", // Path to your favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Set lang attribute based on URL
              (function() {
                var path = window.location.pathname;
                var countryLocales = {
                  'usa': 'en-US',
                  'uk': 'en-GB',
                  'ca': 'en-CA'
                };
                var parts = path.split('/');
                var country = parts[parts.length - 1];
                var locale = countryLocales[country];
                if (locale) {
                  document.documentElement.lang = locale;
                }
              })();
              
              // TypeKit font loading
              (function(d) {
                var config = {
                  kitId: 'mjc4bfk',
                  scriptTimeout: 3000,
                  async: true
                },
                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
              })(document);
            `
          }}
        />
      </head>
      <body className="antialiased bg-black text-white min-h-screen flex flex-col">
        <LangAttribute />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}