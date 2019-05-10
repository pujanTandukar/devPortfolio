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

			<div>
				<form>
					<label>
						<h4>Name:</h4>
						<input className="typeInput" type="text" name="name" />
					</label>
					<label>
						<h4>Subject:</h4>
						<input className="typeInput" type="text" name="subject" />
					</label>
					<label>
						<h4>Comment:</h4>
						<textarea className="typeInputComment" name="Text1" cols="40" rows="5" />
					</label>
					<input className="submitButton" type="submit" value="Submit" />
				</form>
			</div>
		</div>
	)
}

export default StackMenu
