import  { Container } from './BannerSubmit.style';
import ButtonBorder  from '../Button/Button';

export default class BannerSubmit extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {

    return (
      <Container >
        <div className="image" />
        <p className="text">Is ther anyone else you would want us to add?</p>
        <ButtonBorder color="#333333" label="Submit a Name" size="large"/>
      </Container>
    )
  }

}



