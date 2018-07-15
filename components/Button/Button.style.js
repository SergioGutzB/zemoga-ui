import styled from 'styled-components'
import { variables } from '../../styles/variables';


export const Button = styled.button`
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid;
  border-color: white;
  padding:  10px 18px;
  cursor: pointer;
  &:hover {
    background-color: #ffffffac;
  }
  .label {
    color: white;
    font-size: 14px;
    font-weight: 600;
  }
`;
