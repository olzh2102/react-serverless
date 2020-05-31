import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<div>
				<Link to="/">
					Learn.Build.<span>Type.</span>
				</Link>

				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/high-scores">HighScores</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
