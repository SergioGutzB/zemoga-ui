import  { Container } from './Progress.style.js';
import Like from '../../static/images/home/like.svg';

export default class Progress extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const  { percentages } = this.props;

    return (
      <Container percentageOne={percentages[0]} percentageTwo={percentages[1]}>
        <div className="progressOne">
          <div className="progressOne__like">
            <Like width={30} height={30}/>
          </div>
          <p className="progressOne__percentage">{percentages[0]}%</p>
        </div>
        <div className="progressTwo">
          <p className="progressTwo__percentage">{percentages[1]}%</p>
          <div className="progressTwo__like">
            <Like width={30} height={30}/>
          </div>
        </div>
      </Container>
    )
  }

}

