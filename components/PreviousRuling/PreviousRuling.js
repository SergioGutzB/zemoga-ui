import  { Ruling } from './PreviousRuling.style';
import ButtonLike from '../ButtonLike/ButtonLike';
import ButtonBorde from '../Button/Button';
import Progress from '../Progress/Progress';
import { inject, observer } from 'mobx-react'


@inject('votesStore')
@observer
export default class PreviousRuling extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLike: false,
      isNoLike: false,
      voted: false,
    }
  }

  getPercentages(a, b) {
    const total = a + b;
    return [parseInt(Math.round(a*100/total)), parseInt(Math.round(b*100/total))];
  }

  handleLike(){
    this.setState({
      isLike: !this.state.isLike,
      isNoLike: !this.state.isLike? false : this.state.isNoLike,
    })
  }

  handleNoLike(){
    this.setState({
      isNoLike: !this.state.isNoLike,
      isLike: !this.state.isNoLike ? false : this.state.isLike,
    })
  }

  handleVote(){
  const index = this.props.index;
  const likes = this.props.votesStore.votes[this.props.index].likes;
  const noLikes = this.props.votesStore.votes[this.props.index].no_likes;
    if (this.state.isLike){
      this.props.votesStore.like(index, likes + 1 );
      this.setState({
        isLike: false,
        isNoLike: false,
        voted: true,
      });
    } else if (this.state.isNoLike){
      this.props.votesStore.noLike(index, noLikes + 1);
      this.setState({
        isLike: false,
        isNoLike: false,
        voted: true,
      });
    }
  }

  voteAgain(){
    this.setState({voted: false})
  }

  render () {
    const { image, name, message, likes, no_likes, experience } = this.props.votesStore.votes[this.props.index];
    const { isLike, isNoLike, voted }  = this.state;
    const percentages = this.getPercentages(likes, no_likes);

    return (
      <Ruling image={ '/static/images/votes/' + image}>
        <div className="filter" />
        <div className="ruling">
          <div className="ruling__title">
            <div className="ruling__title__state">
              <ButtonLike like={percentages[0] > percentages[1]} small={true} desactive={true}/>
            </div>
            <h2 className="ruling__title__name">{name}</h2>
          </div>
          <p className="ruling__experience">{experience}</p>
          <p className="ruling__message">{voted? 'Thank you for voting!' : message}</p>
          <div className="ruling__actions">
            { !voted ?
            <ButtonLike like={true} small={true}  selected={isLike} action={this.handleLike.bind(this)}/>
            : null }
            { !voted ?
            <ButtonLike like={false} small={true} selected={isNoLike} action={this.handleNoLike.bind(this)}/>
            : null }
            <ButtonBorde label={!voted? 'Vote now' : 'Vote Again' } action={voted? this.voteAgain.bind(this) : this.handleVote.bind(this)}/>
          </div>
        </div>
        <div className="progress">
          <Progress percentages={this.getPercentages(likes, no_likes)} />
        </div>
      </Ruling>
    );
  }

}


