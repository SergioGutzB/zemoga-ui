import { Container } from './index.style';
import HeadHtml from '../components/HeadHtml/HeadHtml';

export default class Blank extends React.Component {
  static async getInitialProps({req, res, query, pathname, asPath, jsonPageRes  }) {
    const isServer = !!req
    const title = query.title;
    return {title};
  }

  constructor(props, context) {
    super(props, context);
  }

  render () {

    return (
    <div>
      <HeadHtml title={this.props.title}/>
      <h1>{this.props.title}</h1>
    </div>
    )
  }
}
