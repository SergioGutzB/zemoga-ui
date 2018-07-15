import  { Container } from './Footer.style';

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {

    return (
      <Container >
        <nav className="nav">
          <a className="nav__link">Term and Conditions</a>
          <a className="nav__link">Privacy policy</a>
          <a className="nav__link">Contact Us</a>
        </nav>
        <nav className="nav">
          <a className="nav__link right">Folow Us</a>
          <img className="nav__link right icon-social" src="/static/images/home/facebook.png"/>
          <img className="nav__link right icon-social" src="/static/images/home/twitter.png" />
        </nav>
      </Container>
    )
  }

}


