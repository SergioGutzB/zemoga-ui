import styled from 'styled-components'
import { variables } from '../../styles/variables';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  .progressOne, .progressTwo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 10px;
    &__percentage {
      font-size: 30px;
      font-weight: 300;
      padding: 0px 5px;
      line-height: 25px;
    }
  }
  .progressOne {
    width: ${props => props.percentageOne ? props.percentageOne + '%' : '0%'};
    background-color: ${variables.primary + 'cc'};
    justify-content: flex-start;

  }
  .progressTwo {
    width: ${props => props.percentageTwo ? props.percentageTwo + '%' : '0%'};
    background-color: ${variables.secondary + 'cc'};
    justify-content: flex-end;
    &__like {
      transform: rotate(180deg);
    }
  }
`;

