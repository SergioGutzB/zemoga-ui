import styled from 'styled-components'
import { variables } from '../../styles/variables';

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${variables.text};
  height: 80px;
  border-top: 1px solid transparent;
  border-image: url(/static/images/home/dots.png) 1 round;
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    &__link {
      cursor: pointer;
      font-weight: 200;
      font-size: 0.85em;
      margin-right: 30px;
      &.icon-social {
        height: 25px;
        width: auto;
      }
      &.right {
        margin-left: 30px;
        margin-right: 0px;
      }
    }
  }

`;

