import { LINK_FIELDS } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    logo {
      url
    }
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    copyright
    logo {
      url
    }
    footerNavItems {
      title
      description
      logo {
        url
      }
    }
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    promotionContent
    date
    loginImage{
      url
    }
    SignUpImage{
      url
    }
    recoverPasswordImage{
      url
    }
    paner{
      url
    }
    productsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
