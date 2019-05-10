import React from 'react'
import './App.css'
import StackMenu from './menu'
import BlogView from './blog'
import AboutView from './about'
import ContactView from './contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className="App">
				<Route exact path="/blog" component={BlogView} />
				<Route exact path="/" component={StackMenu} />
				<Route exact path="/about" component={AboutView} />
				<Route exact path="/contact" component={ContactView} />
			</div>
		</Router>
	)
}

export default App
