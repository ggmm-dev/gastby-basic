import React, { Component } from 'react'
import Logo from '../img/logo.svg'
import Link from 'gatsby-link'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="left">
            <img src={Logo}/>
            <Link>Gatsby</Link>
            <Link>React</Link>
            <Link>Deployment</Link>
            <Link>Process</Link>
          </div>
          <div className="right"></div>
        </div>
      </div>
    )
  }
}
