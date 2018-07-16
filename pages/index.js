import { Container } from './index.style';
import HeadHtml from '../components/HeadHtml/HeadHtml';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import BoxSpan from '../components/BoxSpan/BoxSpan';
import PreviousRuling from '../components/PreviousRuling/PreviousRuling';
import Footer  from '../components/Footer/Footer';
import BannerSubmit from '../components/BannerSubmit/BannerSubmit';

export default class Index extends React.Component {
  render () {
    return (
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
              <PreviousRuling name="Kanye West" experience="1 month in Entretaiment" message="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero." image="/static/images/home/Kanye.png"/>
              <PreviousRuling name="Mark Zuckerberg" experience="1 month in Entretaiment" message="Thank you for voting!" image="/static/images/home/Mark.png"/>
              <PreviousRuling name="Cristina Fernández de Kirchner" experience="1 month in Entretaiment" message="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero." image="/static/images/home/Cristina.png"/>
              <PreviousRuling name="Malala Yousafzai" experience="1 month in Entretaiment" message="Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero." image="/static/images/home/Malala.png"/>
            </div>
          </section>

          <section className="content banner">
            <BannerSubmit />
          </section>

          <section className="content">
            <Footer />
          </section>
        </Container>
    )
  }
}
