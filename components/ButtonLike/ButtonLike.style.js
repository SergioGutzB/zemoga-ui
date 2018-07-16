import styled from 'styled-components'
import { variables } from '../../styles/variables';


console.log("variables: ", variables)
export const Button = styled.button`
  border: none;
  width: ${props => props.small ? '30px' : '100%'};
  height: ${props => props.small ? '32px' : '100%'};
  background-color: ${props => props.like ? variables.primary+'c4' : variables.secondary+'c4' };
  box-sizing: border-box;
  border: 2px solid;
  border-color: ${props => props.selected && props.small ? 'white' : props.like ? variables.primary+'c4' : variables.secondary+'c4' };
  padding:  ${props => props.small ? '2px' : '15px'};
  cursor: pointer;
  opacity: 1;
  animation: opacity 3ms linear;
  @media (max-width: 500px) {
    padding:  0px;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    padding:  ${props => props.small ? '2px' : '0px'};
  }
  &:hover {
    opacity: 0.7;
    animation: opacity 3ms linear;
  }
  .like {
    color: white;
    path {
      fill: white;
    }
    @media (max-width: 500px) {
      transform: scale(0.6) rotate(${props => props.like ? '0deg' : '180deg' });
    }
    @media (min-width: 501px) and (max-width: 900px) {
      transform: scale(0.8) rotate(${props => props.like ? '0deg' : '180deg' });
    }
    width: ${props => props.small ? '18px' : 'auto'};
    height: ${props => props.small ? '18px' : 'auto'};
    transform: rotate(${props => props.like ? '0deg' : '180deg' })
  }
`;
