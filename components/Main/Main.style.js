import styled from 'styled-components'

export const Main = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;
  @media (max-width: 500px)  and (orientation: portrait){
    width: 65%;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    width: 60%;
  }
  @media (min-width: 901px) and (max-width: 1200px) {
    width: 70%;
  }
  .blur {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(/static/images/home/pope.png);
    background-repeat: no-repeat;
    background-size: 82em auto;
    background-position: -8.2em -11.8em;
    filter: url(/media/blur.svg#blur);
    filter: blur(20px);
    @media (max-width: 500px)  and (orientation: portrait){
      background-size: 47em auto;
      background-position: -8.8em -6.3em;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      background-size: 55em auto;
      background-position: -5.1em -7rem;
    }
    @media (min-width: 901px) and (max-width: 1200px) {
      width: 70%;
    }
  }
  .opinion {
    padding: 35px 60px 35px 30px;
    color: white;
    font-size: 16px;
    background-color: #4242429f;
    z-index: 100;
    position: relative;
    @media (max-width: 500px) {
      font-size: 12px;
      padding: 10px 10px 10px 10px;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      font-size: 14px;
      padding: 15px 15px 15px 15px;
    }
    &__what{
      margin: 20px 0px 0px;
      font-weight: bold;
      font-size: 1.3em;
      @media (max-width: 500px) {
        margin: 10px 0px 0px;
        font-size: 1.1em;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        margin: 10px 0px 0px;
        font-size: 1.2em;
      }
    }

    &__description {
      font-weight: 200;
      font-size: 1.3em;
      @media (max-width: 500px) {
        font-size: 1.1em;
      }
      @media (min-width: 501px) and (max-width: 900px) {
        font-size: 1.15em;
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
      @media (min-width: 501px) and (max-width: 900px) {
        margin: 15px 0px;
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
      @media (min-width: 501px) and (max-width: 900px) {
        font-size: 2.65em;
        font-weight: 400;
        margin: 0px 0px 4px;
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
  }
`;
