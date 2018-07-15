import styled from 'styled-components'

const margin = "8rem";
const marginSmall = "10px";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow-x: hidden;
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
    overflow-x: hidden;
    filter: saturate(1.2);

    @media (max-width: 500px)  and (orientation: portrait){
      min-height: 51vh;
      background-size: 152vw auto;
      background-position: -80px top
    }
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
        @media (max-width: 500px)  {
          padding: 4px 0px;
        }
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
          @media (max-width: 500px)  {
            top: 12px;
          }
        }
        p {
          width: 97%;
          text-align: right;
          font-size:  13px;
          font-weight: 600;
          @media (max-width: 500px)  {
            font-size:  12px;
          }
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
        @media (max-width: 500px)  {
          font-size: 1.6em;
          font-weight: 200;
          padding: 4px 0px;
          padding-left: 20px;
        }
      }
    }
  }
  .content {
    margin-left: ${margin};
    margin-right: ${margin};
    @media (max-width: 500px)  {
      margin-left: ${marginSmall};
      margin-right: ${marginSmall};
    }
  }

  .votes {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 500px)  and (orientation: portrait){
      grid-gap: 10px;
      grid-template-columns: 1fr;
    }
  }

`;
