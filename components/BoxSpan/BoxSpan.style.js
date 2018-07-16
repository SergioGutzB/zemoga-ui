import styled from 'styled-components'
import { variables } from '../../styles/variables';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: ${variables.gray};
  color: ${variables.text};
  @media (max-width: 500px) {
    padding: 8px 10px;
  }
  .title {
    color: ${variables.text};
    font-size: 22px;
    font-weight: 200;
    @media (max-width: 500px) {
      display: none;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      font-size: 1em;
      margin-right: 10px;
      width: 217px;
    }
    strong {
      font-size: 38px;
      @media (max-width: 500px) {
        font-size: 1.2em;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        font-size: 1em;
      }
    }
  }
  .message {
    flex: auto;
    text-align: left;
    font-size: 15px;
    font-weight: 200;
    @media (max-width: 500px) {
      font-size: 0.9em;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      font-size: 0.9em;
    }
  }
  .close {
    .shp0 {
      fill: ${variables.text};
    }
    cursor: pointer;
    width: 40px;
    margin-left: 10px;
  }
`;

