export function getImageUrl(assetPath: string) {
  return new URL(`../assets/${assetPath}`, import.meta.url).href
}

export function getOriginLocale() {
  const origin = document.location.origin
  const locale = document.location.pathname.split('/')[1] || 'en_CA'
  return `${origin}/${locale}`
}
