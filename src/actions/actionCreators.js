export function aboutWindowOpen(index) {
  return {
    type: 'ABOUT_WINDOW_OPEN',
    index
  }
}

export function aboutWindowClose(index) {
  return {
    type: 'ABOUT_WINDOW_CLOSE',
    index
  }
}

export function aboutTxtOpen(index) {
  return {
    type: 'ABOUT_TXT_OPEN',
    index
  }
}

export function aboutTxtClose(index) {
  return {
    type: 'ABOUT_TXT_CLOSE',
    index
  }
}

export function aboutImageOpen(index) {
  return {
    type: 'ABOUT_IMAGE_OPEN',
    index
  }
}

export function aboutImageClose(index) {
  return {
    type: 'ABOUT_IMAGE_CLOSE',
    index
  }
}

export function linksWindowOpen(index) {
  return {
    type: 'LINKS_WINDOW_OPEN',
    index
  }
}

export function linksWindowClose(index) {
  return {
    type: 'LINKS_WINDOW_CLOSE',
    index
  }
}
