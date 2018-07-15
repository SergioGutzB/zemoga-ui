import { Main } from './Main.style';
import ButtonLike from '../ButtonLike/ButtonLike';

export default class Index extends React.Component {
  render () {
    return (
    <Main >
      <div className="blur" />
      <div className="opinion">
        <p className="opinion__second-title">What's your opinion on</p>
        <h1 className="opinion__title">Pope Francis?</h1>
        <h4 className="opinion__description">iHe’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </h4>
        <p className="opinion__more-info"><img src="/static/images/home/Wiki.png"  className="wiki"/> More information</p>

        <p className="opinion__what">What's Your Verdict?</p>
      </div>
      <div className="actions">
        <ButtonLike like={true}/>
        <ButtonLike like={false}/>
      </div>
    </Main>

    )
  }
}

