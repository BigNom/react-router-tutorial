import React from 'react'
import { Link } from 'react-router'
import NavLink from './Navlink'
import { IndexLink } from 'react-router'

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

export default React.createClass({
  render() {
    return (
        <div>
            <h1>Ghettohub</h1>
            <ul role="nav">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
            </ul>
            {this.props.children}

        </div>
    )
  }
})
