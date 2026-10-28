// Prefix public files with the base path so they load when hosted under a sub-path (GitHub Pages).
export const withBasePath = (src: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`;
