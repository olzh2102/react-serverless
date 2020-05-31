import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
} from 'react-router-dom'

import Game from './pages/Game'
import GameOver from './pages/GameOver'
import HighScores from './pages/HighScores'
import Home from './pages/Home'

import './App.css'

function App() {
	return (
		<Router>
			<Link to="/">Home</Link>
			<Link to="/game">Game</Link>
			<Link to="/game-over">GameOver</Link>
			<Link to="/high-scores">HighScores</Link>
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
