import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import logo from './pujanLogo-12.png'

function StackMenu() {
	return (
		<div className="App">
			<Menu>
				<a id="about" className="menu-item" href="/about">
					About
				</a>
				<a id="blog" className="menu-item" href="/">
					Home
				</a>
				<a id="contact" className="menu-item" href="/contact">
					Contact
				</a>
				<a id="projects" className="menu-item" href="/blog">
					Projects
				</a>
			</Menu>

			<div className="frontPage">
				<img className="mainLogo" src={logo} />
			</div>
		</div>
	)
}

export default StackMenu
