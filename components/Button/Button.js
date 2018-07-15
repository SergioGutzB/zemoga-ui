import  { Button } from './Button.style';

export default class ButtonBorde extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render () {
  console.log("props: ", this.props)
    const  { label, action, color, size } = this.props;
    const fontSize = size === 'large' ? '1.28rem' : size === 'medium' ? '1.1rem' : '1em';
    const borderWeight = size === 'large' ? '3px' : size === 'large' ? '2px' : '1px';
    const fontWeight =  size === 'large' || size === 'medium' ? 400 : 600;

    return (
      <Button color={color} fontSize={fontSize} borderWeight={borderWeight} fontSize={fontSize} fontWeight={fontWeight}>
        <p class="label">{label}</p>
      </Button>
    )
  }

}
