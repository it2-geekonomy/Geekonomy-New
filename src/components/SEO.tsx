// src/components/SEOClient.tsx
"use client";

import React from "react";
import { Helmet } from "react-helmet";
import { SEOData } from "@/seoData";

interface SEOProps {
  data: SEOData;
}

export default function SEOClient({ data }: SEOProps) {
  const { title, description, canonical, url, image, twitterHandle } = data;

  return (
    <Helmet>
      <title>{title}</title>
     <meta property="og:url" content={data.url} />
<link rel="canonical" href={data.canonical} />


      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    </Helmet>
  );
}
