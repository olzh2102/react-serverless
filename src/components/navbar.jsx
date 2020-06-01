import React from 'react'
import { Link } from 'react-router-dom'
import {
	StyledNavbar,
	StyledNavBrand,
	StyledNavItems,
	StyledLink,
	Accent,
} from '../styled/navbar.styles'

const Navbar = () => {
	return (
		<StyledNavbar>
			<StyledNavBrand>
				<Link to="/">
					Learn.Build.<Accent>Type.</Accent>
				</Link>
			</StyledNavBrand>
			<div>
				<StyledNavItems>
					<li>
						<StyledLink to="/">Home</StyledLink>
					</li>
					<li>
						<StyledLink to="/high-scores">HighScores</StyledLink>
					</li>
				</StyledNavItems>
			</div>
		</StyledNavbar>
	)
}

export default Navbar
