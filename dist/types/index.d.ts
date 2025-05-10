/// <reference types="react" />
/**
 * Main SEO metadata interface
 */
export interface SEOMetadata {
    /**
     * The title of the page
     */
    title: string;
    /**
     * The meta description
     */
    description?: string;
    /**
     * The canonical URL
     */
    canonical?: string;
    /**
     * Open Graph metadata
     */
    openGraph?: OpenGraphMetadata;
    /**
     * Twitter card metadata
     */
    twitter?: TwitterMetadata;
    /**
     * Additional meta tags
     */
    additionalMetaTags?: MetaTag[];
    /**
     * JSON-LD structured data (as a string or object)
     */
    jsonLd?: string | Record<string, any>;
    /**
     * Language of the page
     */
    language?: string;
    /**
     * No index flag
     */
    noIndex?: boolean;
    /**
     * No follow flag
     */
    noFollow?: boolean;
    /**
     * Meta keywords
     */
    keywords?: string;
}
/**
 * Open Graph metadata interface
 */
export interface OpenGraphMetadata {
    /**
     * OG title
     */
    title?: string;
    /**
     * OG description
     */
    description?: string;
    /**
     * OG type
     */
    type?: "website" | "article" | "profile" | "book" | "music" | string;
    /**
     * OG URL
     */
    url?: string;
    /**
     * OG site name
     */
    siteName?: string;
    /**
     * OG locale
     */
    locale?: string;
    /**
     * OG image
     */
    image?: OpenGraphImage | OpenGraphImage[];
}
/**
 * Open Graph image interface
 */
export interface OpenGraphImage {
    /**
     * Image URL
     */
    url: string;
    /**
     * Image alt text
     */
    alt?: string;
    /**
     * Image width
     */
    width?: number;
    /**
     * Image height
     */
    height?: number;
    /**
     * Image type
     */
    type?: string;
}
/**
 * Twitter metadata interface
 */
export interface TwitterMetadata {
    /**
     * Twitter card type
     */
    cardType?: "summary" | "summary_large_image" | "app" | "player";
    /**
     * Twitter handle
     */
    handle?: string;
    /**
     * Twitter site
     */
    site?: string;
    /**
     * Twitter title
     */
    title?: string;
    /**
     * Twitter description
     */
    description?: string;
    /**
     * Twitter image
     */
    image?: string;
    /**
     * Twitter image alt
     */
    imageAlt?: string;
}
/**
 * Generic meta tag interface
 */
export interface MetaTag {
    /**
     * Name attribute of meta tag
     */
    name?: string;
    /**
     * Property attribute of meta tag
     */
    property?: string;
    /**
     * Http-equiv attribute of meta tag
     */
    httpEquiv?: string;
    /**
     * Content attribute of meta tag
     */
    content: string;
}
/**
 * SEO context interface
 */
export interface SEOContextProps {
    /**
     * Default SEO metadata for all pages
     */
    defaultSEO: SEOMetadata;
    /**
     * Current page's SEO
     */
    currentSEO: SEOMetadata | null;
    /**
     * Update current page's SEO
     */
    updateCurrentSEO: (seo: SEOMetadata) => void;
    /**
     * Clear current page's SEO
     */
    clearCurrentSEO: () => void;
}
/**
 * SEO Provider props
 */
export interface SEOProviderProps {
    /**
     * Default SEO metadata
     */
    defaultSEO: SEOMetadata;
    /**
     * Children components
     */
    children: React.ReactNode;
}
/**
 * Page SEO props
 */
export interface PageSEOProps {
    /**
     * SEO metadata for the page
     */
    seo: SEOMetadata;
    /**
     * Merge with default SEO or replace it entirely
     */
    merge?: boolean;
}
/**
 * SEO Head props
 */
export interface SEOHeadProps {
    /**
     * Additional head elements
     */
    additionalElements?: React.ReactNode;
}
