import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Geekonomy - Innovative Technology Solutions",
  description: "Transforming businesses through cutting-edge technology and innovative solutions. We specialize in web development, mobile apps, cloud solutions, AI, and more.",
  keywords: "technology solutions, web development, mobile development, cloud services, AI, machine learning, UI/UX design, consulting",
  authors: [{ name: "Geekonomy" }],
  openGraph: {
    title: "Geekonomy - Innovative Technology Solutions",
    description: "Transforming businesses through cutting-edge technology and innovative solutions",
    type: "website",
    url: "https://geekonomytech.com",
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
            __html: `(function(d) {
              var config = {
                kitId: 'mjc4bfk',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);`
          }}
        />
      </head>
      <body className="antialiased bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}