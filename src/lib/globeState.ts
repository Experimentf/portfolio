// Module-level store: ContactSection writes the banner element reference,
// GlobeSceneRenderer reads it inside useFrame to compute the scissor rect.
let _bannerEl: HTMLElement | null = null

export const globeState = {
  setBanner(el: HTMLElement | null) {
    _bannerEl = el
  },
  getBanner() {
    return _bannerEl
  },
}
