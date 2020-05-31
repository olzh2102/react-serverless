import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import user from '@testing-library/user-event'

import App from './App'

describe('App', () => {
	it('renders Home and other pages', () => {
		// arrange
		const history = createMemoryHistory({
			initialEntries: ['/'],
		})
		const { getByRole, getByText } = render(
			<Router history={history}>
				<App />
			</Router>
		)
		// act
		// assert
		expect(getByRole('heading')).toHaveTextContent(/home/i)

		// act
		user.click(getByText('Game'))
		// assert
		expect(getByRole('heading')).toHaveTextContent(/game/i)

		// act
		user.click(getByText('GameOver'))
		// assert
		expect(getByRole('heading')).toHaveTextContent(/gameover/i)

		// act
		user.click(getByText('HighScores'))
		// assert
		expect(getByRole('heading')).toHaveTextContent(/highscores/i)
	})
})
