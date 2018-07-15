import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import Search from '../../static/images/home/search.svg';

import { HeaderStyle } from './Header.style';



export default class Header extends React.Component {
  render () {
    return (
      <HeaderStyle >
        <nav className="nav">
          <div className="nav__left">
            <h2 className="title">Rule of Thumb.</h2>
          </div>
          <div className="nav__right">
            <a className="nav__link">Past Trials</a>
            <a className="nav__link">How It Works</a>
            <a className="nav__link">Log In / Sign Up</a>
            <a className="nav__link search"><Search /></a>
          </div>
        </nav>
      </HeaderStyle>

    );
  }
}
