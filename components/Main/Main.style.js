import styled from 'styled-components'

export const Main = styled.div`
  width: 36vw;
  position: relative;
  overflow-x: hidden;
  @media (max-width: 500px)  and (orientation: portrait){
    width: 61vw;
  }
  .blur {
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 76px);
    background-image: url(/static/images/home/pope.png);
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: -8rem 46%;
    filter: url(/media/blur.svg#blur);
    filter: blur(20px);
    @media (max-width: 500px)  and (orientation: portrait){
      background-size: 156vw auto;
      background-position: -5.9rem 34%;
    }
  }
  .opinion {
    padding: 30px 60px 30px 30px;
    color: white;
    font-size: 16px;
    background-color: #4242429f;
    z-index: 100;
    position: relative;
    @media (max-width: 500px) {
      font-size: 12px;
      padding: 10px 20px 10px 10px;
    }
    &__what{
      margin: 20px 0px 0px;
      font-weight: bold;
      font-size: 1.3em;
      @media (max-width: 500px) {
        margin: 10px 0px 0px;
        font-size: 1.1em;
      }
    }

    &__description {
      font-weight: 200;
      font-size: 1.3em;
      @media (max-width: 500px) {
        font-size: 1.1em;
      }
    }

    &__more-info {
      margin: 20px 0px;
      font-size: 0.85em;
      text-decoration: underline;
      text-underline-position: under;
      font-weight: 400;
      color: rgba(255, 255, 255, .9);
      @media (max-width: 500px) {
        margin: 10px 0px;
      }
      .wiki {
        height: 12px;
        margin-right: 5px;
      }
    }

    &__title {
      font-size: 3.6em;
      font-weight: 400;
      margin: 0px 0px 20px;
      @media (max-width: 500px) {
        font-size: 2.2em;
        font-weight: 400;
        margin: 0px 0px 5px;
      }
    }

    &__second-title {
      color: rgba(255, 255, 255, .8);
    }
  }

  .actions {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 100;
    position: relative;
    @media (max-width: 500px) {
    }
  }
`;
