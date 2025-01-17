
import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
class Navbar extends Component {
    state= {clicked: false}


    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>React<i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fa-bars'}></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={MenuItems.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar