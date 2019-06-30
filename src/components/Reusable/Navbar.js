import React, { Component } from 'react'
import { Link } from "gatsby"
import logo from '../../images/logo.png'
import {FaOpencart} from 'react-icons/fa'

export default class Navbar extends Component {

    state = {
        navbarshow : false,
        navbarclass : "collapse navbar-collapse",
        menus: [{
            id:1,
            text: "Home",
            url: "/"
        },
        {
            id:2,
            text: "About",
            url:"/about"
        },
        {
            id:3,
            text: "Services",
            url:"/services"
        },
        {
            id:4,
            text: "Contact",
            url:"/contact"
        }
        ]
    }


    navToggler = () => {
        this.state.navbarshow ? this.setState({
            navbarshow : false,
            navbarclass : "collapse navbar-collapse",
        }) : 
        this.setState({
            navbarshow : true,
            navbarclass : "collapse navbar-collapse show",
        })
    }




    render() {
        return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark bg-theme">
            <Link to='/' className="navbar-brand ml-5 ">
                <img src={logo} alt="LCO logo" width="40px"/>
            </Link>
            <button className="navbar-toggler text-white navbar-dark" onClick={this.navToggler}>
                <span className="navbar-toggler-icon text-white"></span>
            </button>

            <div className={this.state.navbarclass}>
                <ul className="navbar-nav ml-auto mr-5 text-white">
                {
                    this.state.menus.map(menu=>(
                        <li className="nav-item" key={menu.id}>
                         <Link className="nav-link text-white" to={menu.url}>
                            {menu.text}
                         </Link>
                        </li>
                    ))
                }
                <li className="nav-item">
                    <Link className="nav-link text-white" to='/cart'>
                        <FaOpencart className="cart-icon"/>
                    </Link>
                </li>

                </ul>
            </div>


        </nav>
        )
    }
}
