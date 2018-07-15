import styled from 'styled-components'
import { variables } from '../../styles/variables';


export const Button = styled.button`
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  border-style: solid;
  border-width: ${props => props.borderWeight? props.borderWeight : '1px'};
  border-color: ${props => props.color ? props.color : 'white'};
  padding:  10px 18px;
  cursor: pointer;
  &:hover {
    background-color: #ffffffac;
  }
  .label {
    line-height: 1;
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize? props.fontSize : '1em'};
    font-weight: ${props => props.fontWeight? props.fontWeight : 400};
  }
`;
