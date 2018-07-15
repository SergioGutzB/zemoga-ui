import styled from 'styled-components'
import { variables } from '../../styles/variables';

export const Container = styled.footer`
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: white;
  position: relative;
  margin: 35px 0px;
  color: ${variables.text};
  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-image: url(/static/images/home/people.png);
    background-size: cover;
    background-position: center;
    opacity: 0.1;
  }
  .text {
    line-height: 1;
    font-size: 2.05rem;
    font-weight: 200;
  }

`;


