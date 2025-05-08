import { SEOMetadata, OpenGraphImage, MetaTag } from "../types";
/**
 * Deep merge two objects
 * @param target - Target object
 * @param source - Source object
 * @returns Merged object
 */
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
export declare const deepMerge: <T extends Record<string, any>>(target: T, source: DeepPartial<T>) => T;
/**
 * Format OpenGraph image to meta tags
 * @param image - OpenGraph image or images
 * @returns Array of meta tags
 */
export declare const formatOpenGraphImage: (image?: OpenGraphImage | OpenGraphImage[]) => MetaTag[];
/**
 * Generate meta tags for SEO metadata
 * @param seo - SEO metadata
 * @returns Array of meta tags
 */
export declare const generateMetaTags: (seo: SEOMetadata) => MetaTag[];
/**
 * Format JSON-LD script content
 * @param jsonLd - JSON-LD data
 * @returns Formatted JSON-LD string
 */
export declare const formatJsonLd: (jsonLd?: string | Record<string, any>) => string;
export {};
