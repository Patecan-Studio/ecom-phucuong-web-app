const normalizeSrc = (src: string) => {
  return src.startsWith("/") ? src.slice(1) : src;
};

export const cloudflareLoader = ({
  src,
  width,
  quality,
  format,
}: {
  src: string;
  width: number;
  quality?: number;
  format?: "webp" | "png" | "jpg";
}) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }

  if (format) {
    params.push(`format=${format}`);
  }

  const paramsString = params.join(",");
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};
