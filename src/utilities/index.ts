export function getImageUrl(assetPath: string) {
  return new URL(`../assets/${assetPath}`, import.meta.url).href
}