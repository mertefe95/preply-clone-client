import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
	const [isActive, setActive] = useState(false)

	const handleToggle = () => {
		setActive(!isActive)
	}

	return (
		<header className='header'>
			<Navbar className='navbar'>
				<div className='preply-logo-div'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='preply-svg'
						viewBox='0 0 99 28'
					>
						<g fill='none'>
							<path
								className='svg text-fill'
								fill='#000'
								d='M40.05 15.49V21h-3.22V5.36h6.1c1.17 0 2.2.21 3.1.64.89.43 1.58 1.04 2.06 1.84.48.79.72 1.69.72 2.7 0 1.53-.53 2.74-1.58 3.62-1.05.89-2.5 1.33-4.35 1.33h-2.83zm0-2.61h2.88c.85 0 1.5-.2 1.95-.6.45-.4.67-.98.67-1.72 0-.77-.23-1.39-.68-1.86A2.52 2.52 0 0043 7.97h-2.95v4.9zm17.3-.6a8.5 8.5 0 00-1.12-.08c-1.18 0-1.95.4-2.31 1.2V21h-3.1V9.38h2.93l.08 1.38c.63-1.06 1.49-1.6 2.6-1.6.34 0 .66.05.96.14l-.04 2.99zm6.84 8.94c-1.7 0-3.1-.53-4.16-1.57a5.57 5.57 0 01-1.61-4.18v-.3c0-1.17.23-2.21.68-3.13A4.97 4.97 0 0161 9.9c.83-.5 1.77-.75 2.83-.75 1.6 0 2.85.5 3.76 1.5.91 1 1.37 2.43 1.37 4.27v1.27h-7.4c.1.76.4 1.37.9 1.83.51.45 1.15.68 1.92.68 1.2 0 2.13-.43 2.8-1.3l1.53 1.71a4.66 4.66 0 01-1.89 1.54 6.2 6.2 0 01-2.64.56zm-.36-9.54c-.61 0-1.11.2-1.5.62a3.22 3.22 0 00-.73 1.78h4.32v-.24a2.3 2.3 0 00-.56-1.6c-.36-.38-.87-.56-1.53-.56zM81.2 15.3c0 1.79-.4 3.22-1.22 4.3a3.9 3.9 0 01-3.29 1.62c-1.17 0-2.12-.41-2.84-1.23v5.48h-3.1V9.37h2.87l.1 1.15a3.65 3.65 0 012.95-1.36c1.43 0 2.55.53 3.34 1.6.8 1.05 1.2 2.51 1.2 4.38v.16zm-3.1-.23c0-1.08-.2-1.92-.58-2.5a1.87 1.87 0 00-1.67-.88c-.97 0-1.64.37-2 1.11v4.76c.38.77 1.05 1.15 2.03 1.15 1.48 0 2.22-1.21 2.22-3.64zM86.4 21h-3.11V4.5h3.11V21zm6.9-4.4l2.15-7.22h3.33L94.09 22.8l-.25.6c-.7 1.53-1.84 2.28-3.44 2.28a4.8 4.8 0 01-1.38-.2v-2.35h.48c.58 0 1.02-.08 1.31-.26.3-.18.52-.48.68-.9l.37-.95-4.07-11.65h3.34l2.16 7.23z'
							></path>
							<path
								className='svg cyan-fill'
								fill='#3BB3BD'
								d='M12.6 6.54c0-1.16-2.1-1.75-4.6-2.46C5.45 3.36 2.56 2.54.45.68L.38.67H.25v10.77c0 .65.13 1.24.39 1.79.27.55.67 1.07 1.22 1.54 1.76 1.51 4.38 2.25 6.7 2.9 1.53.44 2.96.84 4.04 1.42V6.54'
							></path>
							<path
								className='svg red-fill'
								fill='#F9463D'
								d='M14.68 6.29c.11.39.48.71 1.03 1 .9-.37 1.97-.67 3.1-.99 1.7-.48 3.56-1 5.16-1.85a.57.57 0 01.53 1c-1.7.9-3.63 1.45-5.38 1.95-.63.17-1.24.35-1.8.52.59.2 1.24.38 1.92.57l1.27.36a19.8 19.8 0 003.46-1.35.57.57 0 01.53 1c-.7.37-1.42.68-2.15.94 1.57.56 3.1 1.29 4.36 2.37l.25.22c.03-.2.04-.4.04-.6V.67l-.13-.01-.07.03c-2.11 1.85-5.01 2.67-7.56 3.4-2.3.64-4.27 1.2-4.56 2.2m-.03 15.3c0 1.16 2.1 1.75 4.59 2.45 2.55.72 5.45 1.54 7.56 3.4l.07.03.13-.01V16.7c0-.65-.13-1.25-.4-1.79a4.8 4.8 0 00-1.22-1.54c-1.76-1.51-4.38-2.25-6.7-2.9a21.42 21.42 0 01-4.03-1.42V21.6'
							></path>
							<path
								className='svg cyan-fill'
								fill='#3BB3BD'
								d='M11.53 20.84c-.9.36-1.96.67-3.1.99-1.7.48-3.56 1-5.15 1.85a.57.57 0 11-.53-1.01c1.7-.9 3.62-1.44 5.38-1.94.63-.18 1.23-.35 1.8-.53A54.1 54.1 0 008 19.64l-1.27-.37c-1.19.36-2.38.79-3.45 1.36a.57.57 0 11-.53-1.01 17.1 17.1 0 012.15-.94 13.65 13.65 0 01-4.37-2.36l-.25-.23c-.02.2-.04.4-.04.61v10.76l.14.01.07-.03c2.1-1.86 5-2.67 7.55-3.4 2.31-.65 4.28-1.2 4.56-2.2-.1-.39-.48-.71-1.03-1'
							></path>
						</g>
					</svg>
				</div>

				<div
					className={
						isActive ? 'first-half-nav open-first-half' : 'first-half-nav'
					}
				>
					<ul className='leftside-links'>
						<li className='header-li'>
							<Link to='/findtutors' className='header-link'>
								Find tutors
							</Link>
						</li>
						<li className='header-li'>
							<Link className='header-link'>Enterprise</Link>
						</li>
						<li className='header-li'>
							<Link className='header-link' to='/teach'>
								Become a tutor
							</Link>
						</li>
					</ul>
				</div>

				<div className='second-half-nav'>
					<ul className='rightside-icons'>
						<li id='language-select' className='header-li'>
							English, PLN{' '}
							<svg
								className='arrow-icon'
								data-name='arrow-icon-down'
								viewBox='0 0 8.46 4.93'
							>
								<path
									className='arrow-down-path'
									d='M7.26.21l-3 3-3-3a.707.707 0 00-1 1l3.47 3.54a.7.7 0 001 0l3.53-3.53a.71.71 0 00-1-1.01z'
								></path>
							</svg>
						</li>

						<li id='question-mark' className='header-li'>
							<Link id='question-link' className='header-link'>
								<i className='far fa-question-circle fonticon'></i>{' '}
							</Link>
						</li>

						<li id='login-mark' className='header-li'>
							<Link className='header-link' to='/login'>
								<i className='fas fa-sign-in-alt fonticon'></i>
								<span className='login'>Log in</span>
							</Link>
						</li>
					</ul>

					<div className='hamburger-div'>
						<div className='hamburger-wrapper'>
							<button onClick={handleToggle} className='hamburger-icon'>
								<div className='hamburger-svg-div'>
									<svg
										height='12'
										viewBox='0 0 12 12'
										width='12'
										xmlns='http://www.w3.org/2000/svg'
										className='hamburger-close'
									>
										<path d='M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z'></path>
									</svg>{' '}
									:{' '}
									<svg
										className='hamburger-svg'
										width='19'
										height='17'
										viewBox='0 0 19 17'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M19 .78H0v2h19v-2zM19 7.78H0v2h19v-2zM0 14.78h19v2H0v-2z'
											fill='#B5BEC5'
										></path>
									</svg>
									}
								</div>
							</button>
						</div>
					</div>
				</div>
			</Navbar>
		</header>
	)
}
