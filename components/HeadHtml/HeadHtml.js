import Head from 'next/head'

export default class HeadHtml extends React.Component {
  render() {
    const title = this.props.title? this.props.title : "Zemoga Test UI";
    return (
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,900&amp;subset=latin-ext" rel="stylesheet" />
      <link href="/static/style.css" rel="stylesheet"/>
    </Head>
    )
  }
}
