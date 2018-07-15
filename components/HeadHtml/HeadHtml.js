import Head from 'next/head'

export default class HeadHtml extends React.Component {
  render() {
    return (
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,900&amp;subset=latin-ext" rel="stylesheet" />
      <link href="/static/style.css" rel="stylesheet"/>
    </Head>
    )
  }
}
