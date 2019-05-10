import React from 'react'
import { stack as Menu } from 'react-burger-menu'

function hamMenu() {
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
		</div>
	)
}

export default hamMenu
