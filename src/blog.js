import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import logo from './pujanLogo-12.png'
import IndProject from './individualProject'

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

			<div className="projectShowcase">
				<div className="Project">
					<div className="blockProject">
						<div className="blockPhoto1" />
						<h4>SafeRoute</h4>
						<h5 className="programType">iOS Application</h5>
						<h5 className="programlanguages1">SWIFT, FIREBASE</h5>
						<br />
						<h5 className="programInfo">
							SafeRoute is an iOS application that tracks user location for a safer travel during night.
						</h5>
					</div>
				</div>
				<div className="Project">
					<div className="blockProject">
						<div className="blockPhoto2" />
						<h4>HappyMemo</h4>
						<h5 className="programType">iOS Application</h5>
						<h5 className="programlanguages2">SWIFT, FIREBASE</h5>
						<br />
						<h5 className="programInfo">
							HappyMemo is an iOS Application that lets user create a new happy memoriy and store them for
							the future.
						</h5>
					</div>
				</div>
				<div className="Project">
					<div className="blockProject">
						<div className="blockPhoto3" />
						<h4>myHeartBeat</h4>
						<h5 className="programType">Web Application</h5>
						<h5 className="programlanguages3">REACT, FIREBASE</h5>
						<br />
						<h5 className="programInfo">
							myHeartBeat is a web visualization built with WebGL that streams heart rate data from your
							apple watch.
						</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StackMenu
