import styled from 'styled-components'

const margin = "8rem";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  .main-ruling {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;
    width: 100vw;
    background-image: url(/static/images/home/pope.png);
    min-height: 81vh;
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 105vw auto;
    filter: saturate(1.2);
    .days {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &__closing {
        height: 100%;
        width: 31%;
        background-color: #8080807a;
        color: white;
        padding: 10px 0px;
        line-height: 30px;
        position: relative;
        &:after {
        content: '';
        display: block;
        position: absolute;
        top: 17px;
        right: -11px;
        width: 10px;
        height: 10px;
        -moz-transform: rotate(-45deg);
        -webkit-transform: rotate(180deg);
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 15px solid #9b9591d9;
        border-bottom: 10px solid transparent;
        }
        p {
          width: 97%;
          text-align: right;
          font-size:  13px;
          font-weight: 600;
        }
      }
      &__days {
        background-color: #f8f8f8d6;
        line-height: 30px;
        height: 100%;
        padding: 10px 0px;
        flex: auto;
        color: #4d4d4d;
        font-size: 32px;
        font-weight: 200;
        padding-left: 20px;
      }
    }
  }
  .content {
    margin-left: ${margin};
    margin-right: ${margin};
  }

  .votes {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
  }

`;
