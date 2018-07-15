import  { Ruling } from './PreviousRuling.style';
import ButtonLike from '../ButtonLike/ButtonLike';
import ButtonBorde from '../Button/Button';
import Progress from '../Progress/Progress';


export default class PreviousRuling extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { image, name, message, likes, noLikes, experience } = this.props;

    return (
      <Ruling image={image}>
        <div className="filter" />
        <div className="ruling">
          <div className="ruling__title">
            <div className="ruling__title__state">
              <ButtonLike like={true} small={true} desactive={true}/>
            </div>
            <h2 className="ruling__title__name">{name}</h2>
          </div>
          <p className="ruling__experience">{experience}</p>
          <p className="ruling__message">{message}</p>
          <div className="ruling__actions">
            <ButtonLike like={true} small={true} />
            <ButtonLike like={true} small={true} />
            <ButtonBorde label="Vote now" />
          </div>
        </div>
        <div className="progress">
          <Progress percentages={[64, 36]} />
        </div>
      </Ruling>
    );
  }

}


