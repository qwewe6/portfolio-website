// Prefix public files with the base path so images still load when hosted under a sub-path.
export const asset = (src: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`;
