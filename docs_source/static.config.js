import React, { Component } from 'react';
import axios from 'axios';

export default {
  basePath: 'wizardo',
  getSiteData: () => ({
    siteTitle: 'Wizardo',
    metaDescription: 'Wizardo is tool that allows you to create code generators to bootstrap new projects or new features in existing ones.',
    favicon: 'https://s3-us-west-2.amazonaws.com/assets-general-im/wizardo/wizardo.ico',
    logo: "https://s3-us-west-2.amazonaws.com/assets-general-im/wizardo/logo.png",
    urlWizardo: "https://intelimetrica.github.io/wizardo"
  }),
  Document: class CustomHtml extends Component {
    render() {
      const {
        Html,
        Head,
        Body,
        children,
        siteData,
        renderMeta
      } = this.props;

      return (
        <Html>
          <Head>
            <title>{siteData.siteTitle}</title>
            <link rel="shortcut icon" href={siteData.favicon}/>
            <meta charSet="UTF-8" />
            <meta
              name="description"
              content={siteData.metaDescription}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              property="og:title"
              content={siteData.siteTitle}
            />
            <meta
              property="og:description"
              content={siteData.metaDescription}
            />
            <meta
              property="og:image"
              content={siteData.logo}
            />
            <meta
              property="og:url"
              content={siteData.urlWizardo}
            />
            <meta
              name="twitter:title"
              content={siteData.siteTitle}
            />
            <meta
              name="twitter:description"
              content={siteData.metaDescription}
            />
            <meta
              name="twitter:image"
              content={siteData.logo}
            />
            <meta
              name="twitter:card"
              content="summary_large_image"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/contribute',
        component: 'src/containers/Contribute',
      },
      {
        path: '/guides',
        component: 'src/containers/Guides',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
