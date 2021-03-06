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

import Navbar from './components/navbar'

import { Container } from './styled/container.styles'
import { Main } from './styled/main.styles'
import Global from './styled/global.styles'

const App = () => (
	<Router>
		<Global />
		<Main>
			<Container>
				<Navbar />
				<Switch>
					<Route path="/game" component={Game} />
					<Route path="/high-scores" component={HighScores} />
					<Route path="/game-over" component={GameOver} />
					<Route path="/" component={Home} />
				</Switch>
			</Container>
		</Main>
	</Router>
)

export default App
