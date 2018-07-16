import  { Box } from './BoxSpan.style';
import Close from '../../static/images/home/close.svg';

export default class BoxSpan extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      close: false,
      show: true,
    }
  }

  close() {
    setTimeout(_=> {
      this.setState({show: false})
    }, 298);
    this.setState({close: true});
  }

  render () {

    if (this.state.show) {
      return (
        <Box close={this.state.close}>
          <div className="title">
            <p>Speak out. Be heard.
              <strong> Be counted</strong></p>
          </div>
          <div className="message">
            <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
          </div>
          <Close className="close" onClick={_=> this.close()}/>
        </Box>
      )
    } else {
      return (<div />)
    }
  }

}

