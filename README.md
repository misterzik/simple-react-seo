![alt text](simple-react-seo.png "Simple React SEO")

# Simple React SEO

A TypeScript React library for managing SEO metadata on a per-page basis. This library provides components to easily set and manage SEO-related tags in your React application.

## Installation

```bash
npm install simple-react-seo
# or
yarn add simple-react-seo
```

## Features

&nbsp;&nbsp;✅ TypeScript support

&nbsp;&nbsp;✅ Per-page SEO management

&nbsp;&nbsp;✅ Support for Open Graph and Twitter card metadata

&nbsp;&nbsp;✅ JSON-LD structured data support

&nbsp;&nbsp;✅ SEO context provider

&nbsp;&nbsp;✅ Customizable meta tags

&nbsp;&nbsp;✅ Canonical URL support

&nbsp;&nbsp;✅ Robots directives (noindex, nofollow)

## Usage

### Basic Setup

Wrap your application with the `SEOProvider` component and add the `SEOHead` component to your document head:

```tsx
// _app.tsx (Next.js) or App.tsx (React)
import React from "react";
import { SEOProvider, SEOHead } from "simple-react-seo";

const defaultSEO = {
  title: "My Website",
  description: "A website built with Simple React SEO",
  openGraph: {
    type: "website",
    siteName: "My Website",
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@myhandle",
    site: "@mysite",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <SEOProvider defaultSEO={defaultSEO}>
      {/* Add SEOHead in your document head */}
      <SEOHead />
      <Component {...pageProps} />
    </SEOProvider>
  );
}

export default MyApp;
```

### Using with Next.js

For Next.js applications, use it in your `_app.tsx` and `_document.tsx` files:

```tsx
// _document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
import { SEOHead } from "simple-react-seo";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <SEOHead />
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
```

### Per-page SEO

Use the `PageSEO` component in your page components to set page-specific SEO:

```tsx
// pages/about.tsx
import React from "react";
import { PageSEO } from "simple-react-seo";

const AboutPage = () => {
  return (
    <>
      <PageSEO
        seo={{
          title: "About Us | My Website",
          description: "Learn more about our company",
          openGraph: {
            title: "About Our Company",
            image: {
              url: "https://example.com/about-image.jpg",
              alt: "About Us",
              width: 1200,
              height: 630,
            },
          },
        }}
      />
      <div>
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </div>
    </>
  );
};

export default AboutPage;
```

### Using JSON-LD Structured Data

```tsx
// pages/product.tsx
import React from "react";
import { PageSEO } from "simple-react-seo";

const ProductPage = ({ product }) => {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <PageSEO
        seo={{
          title: `${product.name} | My Store`,
          description: product.description,
          jsonLd: productJsonLd,
        }}
      />
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </>
  );
};

export default ProductPage;
```

### Using the SEO Hook

You can also use the `useSEO` hook to access or update SEO data programmatically:

```tsx
import React, { useEffect } from "react";
import { useSEO } from "simple-react-seo";

const DynamicPage = ({ pageData }) => {
  const { updateCurrentSEO } = useSEO();

  useEffect(() => {
    // Update SEO when pageData changes
    updateCurrentSEO({
      title: pageData.title,
      description: pageData.description,
      canonical: pageData.url,
    });

    // Clean up is handled automatically when component unmounts
  }, [pageData, updateCurrentSEO]);

  return (
    <div>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
    </div>
  );
};

export default DynamicPage;
```

## API Reference

### Components

#### `SEOProvider`

The provider component that wraps your application and provides SEO context.

Props:

- `defaultSEO` (required): Default SEO metadata for all pages
- `children` (required): Child components

#### `SEOHead`

Component that renders SEO tags in the document head.

Props:

- `additionalElements` (optional): Additional React elements to insert in the head

#### `PageSEO`

Component to set page-specific SEO metadata.

Props:

- `seo` (required): SEO metadata for the page
- `merge` (optional, default: `true`): Whether to merge with default SEO or replace it entirely

### Hooks

#### `useSEO()`

Hook to access and update SEO data within components.

Returns:

- `defaultSEO`: Default SEO metadata
- `currentSEO`: Current page's SEO metadata
- `updateCurrentSEO(seo)`: Function to update current SEO
- `clearCurrentSEO()`: Function to clear current SEO

## TypeScript Types

The library exports TypeScript types for all properties:

```tsx
import {
  SEOMetadata,
  OpenGraphMetadata,
  TwitterMetadata,
  MetaTag,
} from "simple-react-seo";

// Example usage
const mySEO: SEOMetadata = {
  title: "Page Title",
  // ...other properties
};
```

## License

MIT
