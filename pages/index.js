import { Container } from './index.style';
import HeadHtml from '../components/HeadHtml/HeadHtml';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import BoxSpan from '../components/BoxSpan/BoxSpan';
import PreviousRuling from '../components/PreviousRuling/PreviousRuling';
import Footer  from '../components/Footer/Footer';
import BannerSubmit from '../components/BannerSubmit/BannerSubmit';
import { initializeStore } from '../votesStore';
import { Provider } from 'mobx-react';

export default class Index extends React.Component {
  static async getInitialProps({req}) {
    const isServer = !!req
    const data =  await import('../static/data.json');
    const votesStore = initializeStore(isServer, data);
    return {data, votesStore};
  }

  constructor(props, context) {
    super(props, context);
    this.votesStore = initializeStore(props.isServer, props.data);
  }

  componentDidMount() {
    const votes = JSON.parse(localStorage.getItem('votes'));
    if (votes) {
      this.votesStore.update(votes);
    }
  }

  render () {

    const {votes} = this.votesStore;

    return (
    <Provider votesStore={this.votesStore}>
      <Container >
        <HeadHtml />
        <section className="main-ruling">
          <Header />
          <div className="content">
            <Main  className="main"/>
          </div>
          <div className="days">
            <div className="days__closing"><p>CLOSING IN</p></div>
            <div className="days__days"><p><strong>22</strong> days</p></div>
          </div>
        </section>

        <section className="section message content">
          <BoxSpan />
        </section>

        <section className="section votes content">
          <h1 className="votes__title">Votes</h1>
          <div className="votes__grid">
            { votes.length?
            votes.map((d, index) => <PreviousRuling key={index} index={index}/> )
            : null }
          </div>
        </section>

        <section className="content banner">
          <BannerSubmit />
        </section>

        <section className="content">
          <Footer />
        </section>
      </Container>
    </Provider>
    )
  }
}
