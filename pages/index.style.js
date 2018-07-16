import styled from 'styled-components'
import { variables } from '../styles/variables';

const margin = variables.margin;
const marginSmall = variables.marginSmall;
const marginMedium = variables.marginMedium;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow-x: hidden;
  max-width: ${variables.maxWidth};
  margin: 0 auto;
  border-left: 1px solid #fbfbfb;
  border-right: 1px solid #fbfbfb;
  .main-ruling {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;
    width: 100%;
    background-image: url(/static/images/home/pope.png);
    height: 80.5vh;
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 105% auto;
    filter: saturate(1.2);
    @media (max-width: 500px)  and (orientation: portrait){
      height: 57.5vh;
      background-size: auto 57.5vh;
      background-position: -120px center;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      height: 30rem;
      background-size: 55rem auto;
      background-position: -2.2rem 0rem;
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
        @media (min-width: 501px) and (max-width: 900px) {
          padding: 8px 0px;
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
          @media (min-width: 501px) and (max-width: 900px) {
            top: 14px;
            right: -15px;
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
          padding: 4px 0px;
          padding-left: 20px;
        }
        @media (min-width: 501px) and (max-width: 900px) {
          font-size: 1.8em;
          padding: 8px 0px;
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
    @media (min-width: 501px) and (max-width: 900px) {
      margin-left: ${marginMedium};
      margin-right: ${marginMedium};
    }
  }

  .votes {
    &__title {
      font-size: 2.8em;
      font-weight: 200;
      color: ${variables.text};
      margin-bottom: 35px;
      @media (max-width: 500px)  and (orientation: portrait){
        margin-bottom: 15px;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        margin-bottom: 20px;
      }
    }
    &__grid {
      display: grid;
      grid-gap: 40px;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 500px)  and (orientation: portrait){
        grid-gap: 10px;
        grid-template-columns: 1fr;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

`;
