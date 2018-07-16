import styled from 'styled-components'
import { variables } from '../../styles/variables';

export const Container = styled.div`
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
  @media (max-width: 500px)  and (orientation: portrait){
    padding: 0px 10px;
    margin: 10px 0px;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    padding: 5px 15px;
    margin: 15px 0px;
  }
  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-image: url(/static/images/home/people.png);
    background-size: cover;
    background-position: center;
    opacity: 0.2;
  }
  .text {
    line-height: 1;
    font-size: 2.01rem;
    font-weight: 200;
    @media (max-width: 500px){
      font-size: 1.4rem;
      width: 60%;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      font-size: 1.4rem;
      width: 60%;
    }
  }

`;


