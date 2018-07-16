import styled from 'styled-components'
import { variables } from '../../styles/variables';

export const Ruling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image: url(${props => props.image? props.image : ''});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 16px;
  height: 550px;
  position: relative;
  @media (max-width: 500px)  and (orientation: portrait){
    height: 450px;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    height: 460px;
  }
  .ruling {
    padding: 35px 60px 35px 38px;
    color: white;
    width: calc(100% - 95px);
    position: relative;
    z-index: 20;
    @media (max-width: 500px)  and (orientation: portrait){
      padding: 35px;
      width: calc(100% - 90px);
    }
    @media (min-width: 501px) and (max-width: 900px) {
      padding: 35px;
      width: calc(100% - 70px);
    }
     &__title {
      position: relative;
      margin-bottom: 5px;
      &__state {
        position: absolute;
        left: -38px;
        bottom: -3px;
        width: 40px;
        height: 40px;
        @media (max-width: 500px)  and (orientation: portrait){
          left: -35px;
        }
        @media (min-width: 501px) and (max-width: 900px) {
          left: -35px;
        }
      }
      &__name {
        font-size: 2.7em;
        font-weight: 600;
        line-height: 1;
        @media (min-width: 501px) and (max-width: 900px) {
          font-size: 2.4em;
        }
      }
    }

    &__experience {
      font-size: 0.82em;
      font-weight: 600;
      margin: 0px;
    }

    &__message {
      font-size: 1em;
      font-weight: 400;
      margin: 16px 0px;
      height: 38px;
      @media (min-width: 501px) and (max-width: 900px) {
        height: 57px;
      }
    }

    &__actions {
      margin-bottom: 2px;
      width: 45%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 500px)  and (orientation: portrait){
        width: 60%;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        width: 80%;
      }
    }

  }
  .message {
    flex: auto;
    text-align: left;
    font-size: 15px;
    font-weight: 200;
  }

  .progress {
    width: 100%;
    position: relative;
    z-index: 20;
  }

  .filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,0.03);
    background: -moz-linear-gradient(top, rgba(0,0,0,0.03) 4%, rgba(0,0,0,0.03) 23%, rgba(0,0,0,0.75) 84%, rgba(0,0,0,0.75) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(4%, rgba(0,0,0,0.03)), color-stop(23%, rgba(0,0,0,0.03)), color-stop(84%, rgba(0,0,0,0.75)), color-stop(100%, rgba(0,0,0,0.75)));
    background: -webkit-linear-gradient(top, rgba(0,0,0,0.03) 4%, rgba(0,0,0,0.03) 23%, rgba(0,0,0,0.75) 84%, rgba(0,0,0,0.75) 100%);
    background: -o-linear-gradient(top, rgba(0,0,0,0.03) 4%, rgba(0,0,0,0.03) 23%, rgba(0,0,0,0.75) 84%, rgba(0,0,0,0.75) 100%);
    background: -ms-linear-gradient(top, rgba(0,0,0,0.03) 4%, rgba(0,0,0,0.03) 23%, rgba(0,0,0,0.75) 84%, rgba(0,0,0,0.75) 100%);
    background: linear-gradient(to bottom, rgba(0,0,0,0.03) 4%, rgba(0,0,0,0.03) 23%, rgba(0,0,0,0.75) 84%, rgba(0,0,0,0.75) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000', GradientType=0 );
    z-index: 10;
  }
`;


