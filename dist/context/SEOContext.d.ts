import React from "react";
import { SEOContextProps } from "../types";
declare const SEOContext: React.Context<SEOContextProps>;
/**
 * Hook to use the SEO context
 * @returns SEO context values and methods
 */
export declare const useSEO: () => SEOContextProps;
export default SEOContext;
