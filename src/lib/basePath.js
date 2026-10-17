// Prefix for when the site is served from a sub-path (e.g. GitHub Pages project site).
// Set NEXT_PUBLIC_BASE_PATH at build time; empty for local dev and root-domain hosting.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const withBase = (path) => `${BASE_PATH}${path}`;
