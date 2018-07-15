import styled from 'styled-components'

const margin = "7.5rem";
const marginSmall = "1rem";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - ${margin*2});
  padding: 0px ${margin};
  background-image: url(/static/images/home/gradient.png);
  background-size: contain;
  height: 115px;
  color: white;

  @media (max-width: 500px) {
    width: calc(100vw  - 20px);
    padding: 0px ${marginSmall};
    height: 40px;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin: 0px;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

  .nav {
    flex: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    &__link {
      margin: 0px;
      font-size: 16px;
      cursor: pointer;
      width: 150px;
      @media (max-width: 500px) {
        font-size: 0.8em;
        width: 80px;
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
      }
    }
    &__right {
      text-align: right;
    }
    &__right, &__left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      align-content: center;
    }
  }
`;
