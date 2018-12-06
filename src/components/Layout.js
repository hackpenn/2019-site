import React from 'react'
import Helmet from 'react-helmet'
import data from 'data'
import ThemeProvider from 'theme'
import { theme } from 'theme'
import '../../static/fonts.css'

const { name, title, description, img, url, org, event } = data

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({ children }) => (
  <ThemeProvider>
    <Helmet title={title}>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content={theme.colors.primary} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={theme.colors.primary}
      />
      <meta name="msapplication-TileColor" content={theme.colors.primaryDark} />
      {meta([
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:domain', content: url },
        { name: 'twitter:site', content: url },
        { name: 'twitter:image', content: img },
        { name: 'twitter:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: img },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: name },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url }
      ])}
      <script type="application/ld+json" children={JSON.stringify(org)} />
      <script type="application/ld+json" children={JSON.stringify(event)} />
    </Helmet>
    {children}
  </ThemeProvider>
)
