import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

import Game from './pages/Game'
import GameOver from './pages/GameOver'
import HighScores from './pages/HighScores'
import Home from './pages/Home'

import './App.css'
import Navbar from './components/navbar'

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/game" component={Game} />
				<Route path="/high-scores" component={HighScores} />
				<Route path="/game-over" component={GameOver} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	)
}

export default App
