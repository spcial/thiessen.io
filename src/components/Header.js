import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Dennis Thießen" /></a>
                    <h1><strong>I&apos;m Dennis Thießen</strong>, a Dresden-based <br />
                    freelance software engineer.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
