interface MedLink {
  mediaLink: string
}

export const redirectionMedia = (e: Event, mediaSrc: MedLink) => {
  const target = e.target as HTMLDivElement

  if (target.id === 'link_tweeter') {
    mediaSrc.mediaLink = 'https://twitter.com/nest_Ngoueni'
  } else if (target.id === 'link_github') {
    mediaSrc.mediaLink = 'https://github.com/BeinRain06'
  } else if (target.id === 'link_linkedin') {
    mediaSrc.mediaLink = 'https://www.linkedin.com/in/gerard-ngouend-5a0584244/'
  }

  window.open(mediaSrc.mediaLink, '_blank')
}

export const handleHoverMedia = (e: Event, typeAction: string) => {
  const target = e.currentTarget as HTMLDivElement

  if (typeAction === 'hover') {
    target.firstElementChild?.setAttribute('data-icon', '1')
  } else {
    target.firstElementChild?.setAttribute('data-icon', '0')
  }
}
