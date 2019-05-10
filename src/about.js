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

			<div className="titlePage">
				<img className="titleLogo" src={logo} />
			</div>

			<div className="aboutMe">
				<h3>Honest</h3>
				<h3 className="luckyh3">Empathetic</h3>
				<h3>Ambitious</h3>
				<div className="paraBox">
					<p>
						My name is Pujan Tandukar and I am a software developer and a graphic designer from Boulder,
						Colorado.
					</p>
					<p>
						I use technology as a mean to help people. I love creating applications that is elegant and
						delicate to inspire and empower others. I am a developer with experience in user interaction and
						user expereience. I love making web and mobile applications.
					</p>
				</div>
			</div>
		</div>
	)
}

export default StackMenu
