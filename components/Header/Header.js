import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';
import Search from '../../static/images/home/search.svg';

import { HeaderStyle } from './Header.style';

export default class Header extends React.Component {

  goTo(title) {
    Router.push({pathname: "/blank", query: {title: title} });
  }

  render () {
    return (
      <HeaderStyle >
        <nav className="nav">
          <div className="nav__left">
            <h2 className="title">Rule of Thumb.</h2>
          </div>
          <div className="nav__right">
            <a className="nav__link" onClick={_=> this.goTo('Past Trials')}>Past Trials</a>
            <a className="nav__link" onClick={_=> this.goTo('How It Works')}>How It Works</a>
            <a className="nav__link" onClick={_=> this.goTo('Log In / Sign Up')}>Log In / Sign Up</a>
            <a className="nav__link search" onClick={_=> this.goTo('Search')}><Search /></a>
          </div>
        </nav>
      </HeaderStyle>

    );
  }
}
