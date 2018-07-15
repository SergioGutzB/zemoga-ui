import styled from 'styled-components'
import { variables } from '../../styles/variables';

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: ${variables.gray};
  .title {
    color: ${variables.text};
    font-size: 22px;
    font-weight: 200;
    strong {
      font-size: 38px;
    }
  }
  .message {
    flex: auto;
    text-align: left;
    font-size: 15px;
    font-weight: 200;
  }
  .close {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

