export const languages = {
  it: 'Italiano',
  en: 'English'
} as const

export const defaultLang: keyof typeof languages = 'it'

export const ui = {
  it: {
    nav: {
      localeSelectorSrOnlyLabel: 'Seleziona una lingua'
    },
    header: {
      toptitle: 'Ciao, io sono',
      title: 'Carmine Porricelli.',
      subtitle:
        'Sono uno stakanovista con anni di esperienza professionale alle spalle. Sviluppatore autodidatta. Sempre disponibile per imparare, adoro lavorare in gruppo.',
      goToGithubBtnAriaLabel: 'Vai al mio GitHub',
      goToLinkedinBtnAriaLabel: 'Vai al mio LinkedIn'
    },
    cta: {
      titleFirstRow: 'Vuoi sapere di più?',
      titleSecondRow: 'Contattami o scarica il mio CV.'
    },
    contactMeButton: { label: 'Contattami' },
    downloadCVButton: {
      label: 'Scarica CV',
      lastUpdated: 'Aggiornato il '
    }
  },
  en: {
    nav: {
      localeSelectorSrOnlyLabel: 'Select a language'
    },
    header: {
      toptitle: "Hi, I'm",
      title: 'Carmine Porricelli',
      subtitle:
        'I am a workaholic with years of professional experience. Self-taught developer. Always available to learn, I love working in a team.',
      goToGithubBtnAriaLabel: 'Go to my GitHub',
      goToLinkedinBtnAriaLabel: 'Go to my LinkedIn'
    },
    cta: {
      titleFirstRow: 'Do you want to know more?',
      titleSecondRow: 'Contact me or download my CV.'
    },
    contactMeButton: { label: 'Contact Me' },
    downloadCVButton: {
      label: 'Download CV',
      lastUpdated: 'Last updated '
    }
  }
} as const satisfies Record<keyof typeof languages, unknown>
