import  { Container } from './Footer.style';
import Router from 'next/router';

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  goTo(title) {
    Router.push({pathname: "/blank", query: {title: title} });
  }

  render () {

    return (
      <Container >
        <nav className="nav">
          <a className="nav__link"  onClick={_=> this.goTo('Term and Conditions')}>Term and Conditions</a>
          <a className="nav__link" onClick={_=> this.goTo('Privacy policy')}>Privacy policy</a>
          <a className="nav__link" onClick={_=> this.goTo('Contact Us')}>Contact Us</a>
        </nav>
        <nav className="nav">
          <a className="nav__link right" onClick={_=> this.goTo('Follow Us')}>Folow Us</a>
          <img className="nav__link right icon-social" src="/static/images/home/facebook.png"  onClick={_=> this.goTo('Facebook')}/>
          <img className="nav__link right icon-social" src="/static/images/home/twitter.png"  onClick={_=> this.goTo('Twitter')}/>
        </nav>
      </Container>
    )
  }

}


