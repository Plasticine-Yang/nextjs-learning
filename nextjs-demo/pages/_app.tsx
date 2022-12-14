import { ILayoutProps, Layout } from '@/components/layout'
import code from '@/public/code.png'
import type { AppContext, AppProps } from 'next/app'
import App from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp(data: AppProps & ILayoutProps) {
  const { Component, pageProps, navbarData, footerData } = data

  return (
    <div>
      <Head>
        <title>A Demo for 《深入浅出SSR官网开发指南》</title>
        <meta
          name="description"
          content="A Demo for 《深入浅出SSR官网开发指南》"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbarData={navbarData} footerData={footerData}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context)

  return {
    ...pageProps,
    navbarData: {},
    footerData: {
      title: 'Demo',
      linkList: [
        {
          title: '技术栈',
          list: [
            {
              label: 'react',
            },
            {
              label: 'typescript',
            },
            {
              label: 'ssr',
            },
            {
              label: 'nodejs',
            },
          ],
        },
        {
          title: '了解更多',
          list: [
            {
              label: '掘金',
              link: 'https://juejin.cn/user/2714061017452557',
            },
            {
              label: '知乎',
              link: 'https://www.zhihu.com/people/zmAboutFront',
            },
            {
              label: 'csdn',
            },
          ],
        },
        {
          title: '联系我',
          list: [{ label: '微信' }, { label: 'QQ' }],
        },
      ],
      qrCode: {
        image: code,
        text: '祯民讲前端微信公众号',
      },
      copyRight: 'Copyright © 2022 xxx. 保留所有权利',
      siteNumber: '粤ICP备XXXXXXXX号-X',
      publicNumber: '粤公网安备 xxxxxxxxxxxxxx号',
    },
  }
}

export default MyApp
