import  { Button } from './ButtonLike.style';
import Like from '../../static/images/home/like.svg';

export default class ButtonLike extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const  { like, action, small, desactive, selected } = this.props;

    return (
      <Button  like={!!like} small={small} desactive={desactive} selected={selected} onClick={_=> !!action? action() : null}>
        <Like className="like" />
      </Button>
    )
  }

}
