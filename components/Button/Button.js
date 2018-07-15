import  { Button } from './Button.style';

export default class ButtonBorde extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const  { label, action } = this.props;

    return (
      <Button>
        <p class="label">{label}</p>
      </Button>
    )
  }

}
