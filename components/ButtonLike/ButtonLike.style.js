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
  border-color: ${props => props.like ? variables.primary+'c4' : variables.secondary+'c4' };
  padding:  ${props => props.small ? '2px' : '15px'};
  cursor: pointer;
  &:hover {
    border-color: ${props => props.desactive ? (props.like ? variables.primary+'c4' : variables.secondary+'c4') : 'white' };
  }
  .like {
    color: white;
    path {
      fill: white;
    }
    width: ${props => props.small ? '18px' : 'auto'};
    height: ${props => props.small ? '18px' : 'auto'};
    transform: rotate(${props => props.like ? '0deg' : '180deg' })
  }
`;
