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
      font-size: 0.9em;
      display: none;
    }
    strong {
      font-size: 38px;
      @media (max-width: 500px) {
        font-size: 1.2em;
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
  }
  .close {
    .shp0 {
      fill: ${variables.text};
    }
    cursor: pointer;
    width: 50px;
    height: 30px;
    margin-left: 10px;
  }
`;

