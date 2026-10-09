/** Гуашевая вставка на прозрачном фоне */
export function Art({ src, alt, w, h, className = '' }: { src: string; alt: string; w: number; h: number; className?: string }) {
  return <img className={`art ${className}`} src={src} alt={alt} width={w} height={h} loading="lazy" />
}
