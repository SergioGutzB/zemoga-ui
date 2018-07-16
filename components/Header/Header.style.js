import styled from 'styled-components'
import { variables } from '../../styles/variables';

const margin = variables.margin;
const marginSmall = variables.marginSmall;
const marginMedium = variables.marginMedium;

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - ${margin*2});
  padding: 0px ${margin};
  background-image: url(/static/images/home/gradient.png);
  background-size: contain;
  background-repeat-y: no-repeat;
  height: 115px;
  color: white;
  max-width: ${variables.maxWidth};

  @media (max-width: 500px) {
    width: calc(100%  - 20px);
    padding: 0px ${marginSmall};
    height: 60px;
    background-size: 130% auto;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    width: calc(100% - ${marginMedium*2});
    padding: 0px ${marginMedium};
    height: 70px;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin: 0px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      font-size: 1.5em;
      width: 160px;
    }
  }

  .nav {
    flex: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
    &__link {
      margin: 0px;
      font-size: 16px;
      cursor: pointer;
      width: 150px;
      @media (max-width: 500px) {
        font-size: 0.8em;
        width: auto;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        font-size: 0.9em;
        width: 120px;
      }
      &:hover {
        font-weight: bold;
      }
      &.search {
        width: 30px;
        margin-left: 40px;
        @media (max-width: 500px) {
          width: 25px;
          margin-left: 10px;
        }
        @media (min-width: 501px) and (max-width: 900px) {
          margin-left: 20px;
        }
      }
    }
    &__right, &__left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }
    &__right {
      text-align: right;
      @media (max-width: 500px) {
        text-align: center;
        width: 100%;
      }
    }
    &__left {
      @media (max-width: 500px) {
        display: none;
      }
    }
  }
`;
