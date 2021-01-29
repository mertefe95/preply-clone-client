import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Login = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [url, setUrl] = useState('')

	const responseGoogle = (response) => {
		setName(response.profileObj.name)
		setEmail(response.profileObj.email)
		setUrl(response.profileObj.imageUrl)
	}

	const useStyles = makeStyles((theme) => ({
		root: {
			'& > *': {
				margin: theme.spacing(1),
			},
		},
		buttonStyles: {
			fontFamily: 'Roboto',
			fontUppercase: false,
			fontSize: '16px',
			fontWeight: '500',
			border: 'none',
			padding: '15px',
			borderRadius: '2px',
			cursor: 'pointer',
			color: '#fff',
			backgroundColor: 'rgb(80, 187, 196)',
		},
	}))

	const classes = useStyles()

	return (
		<div className='login-form-div'>
			<div className='login-main'>
				<div className='login-page'>
					<div className='login-form'>
						<div className='login-inner-first'>
							<h1 className='login-h1'>Log in</h1>
							<div className='h1-right'>
								<Link
									className='sign-up-student'
									tabIndex='1'
									data-go-action='LoginPage'
									data-ga-label='Sign_up_as_student'
									data-qa-id='sign-up-student-link'
								>
									<span>Sign up as a student</span>
								</Link>
								<span className='sign-up-divider'>or</span>
								<Link
									className='sign-up-tutor'
									tabIndex='1'
									data-dwh-event-name='tutor-acquisition'
									data-dwh-action='become_a_tutor_sign_up_page'
									data-ga-action='LoginPage'
									data-ga-label='Sign_up_as_tutor'
								>
									<span>Sign up as tutor</span>
								</Link>
							</div>
							<div className='migration-wrap'>
								<div className='sign-in-facebook-google'>
									<div className='sign-in-seperator'></div>
									<div id='notifications'></div>
									<div className='sign-list'>
										<div className='sign-item'>
											<a
												id='facebook_login'
												className='sign-in-btn'
												data-pfb-path='/login/facebook/'
												data-pfb-path-param='prev:/en/login'
												data-pfb-autodetect-tz='true'
												to='/login/facebook/?prev=/en/login&timezone=Europe/Istanbul&language=en&registration_type=MN'
											>
												<svg
													className='facebook-svg'
													xmlns='http://www.w3.org/2000/svg'
													width='28'
													height='28'
													viewBox='0 0 28 28'
												>
													<path
														d='M498,200a4,4,0,0,1,4-4h20a4,4,0,0,1,4,4v20a4,4,0,0,1-4,4H502a4,4,0,0,1-4-4Z'
														transform='translate(-498 -196)'
														fill='#fff'
													></path>
													<path
														d='M513.73,219v-7.754h2.6l.39-3.023h-2.99v-1.93c0-.874.243-1.47,1.5-1.47h1.6v-2.7A21.335,21.335,0,0,0,514.5,202a3.641,3.641,0,0,0-3.887,3.994v2.23H508v3.022h2.61V219Z'
														transform='translate(-498 -196)'
														fill='#3b5998'
													></path>
												</svg>
												<span className='sign-text'>Log in with Facebook</span>
											</a>
										</div>
										<div className='sign-item'>
											<a
												id='google_login'
												className='sign-in-btn-google'
												data-pfb-path='/login/google-oauth2/'
												data-pfb-path-param='prev:/en/login'
												data-pfb-autodetect-tz='true'
												to='/login/google-oath2/?prev=/en/login&timezone=Europe/Istanbul&language=en&registration_type=MN'
											>
												<svg
													className='google-svg'
													xmlns='http://www.w3.org/2000/svg'
													width='28'
													height='28'
													viewBox='0 0 28 28'
												>
													<path
														d='M498,264a4,4,0,0,1,4-4h20a4,4,0,0,1,4,4v20a4,4,0,0,1-4,4H502a4,4,0,0,1-4-4Z'
														transform='translate(-498 -260)'
														fill='#fff'
													></path>
													<path
														d='M519.68,274.186a9.15,9.15,0,0,0-.145-1.636H512v3.1h4.3a3.68,3.68,0,0,1-1.6,2.414v2.007h2.586A7.8,7.8,0,0,0,519.68,274.186Z'
														transform='translate(-498 -260)'
														fill='#4285f4'
													></path>
													<path
														d='M512,282a7.636,7.636,0,0,0,5.294-1.938l-2.586-2.007a4.827,4.827,0,0,1-7.185-2.535H504.85v2.073A8,8,0,0,0,512,282Z'
														transform='translate(-498 -260)'
														fill='#34a853'
													></path>
													<path
														d='M507.524,275.523a4.737,4.737,0,0,1,0-3.04V270.41h-2.672a8.013,8.013,0,0,0,0,7.185l2.674-2.072Z'
														transform='translate(-498 -260)'
														fill='#fbbc05'
													></path>
													<path
														d='M512,269.182a4.318,4.318,0,0,1,3.057,1.2l2.295-2.294A7.691,7.691,0,0,0,512,266a8,8,0,0,0-7.15,4.408l2.674,2.072a4.768,4.768,0,0,1,4.476-3.3Z'
														transform='translate(-498 -260)'
														fill='#ea4335'
													></path>
												</svg>
												<span className='sign-text'>Log in with Google</span>
											</a>
										</div>
									</div>
									<div className='sign-in-seperator'>
										<span className='sign-in-seperator-text'> or </span>
									</div>
								</div>
							</div>
							<form method='post'>
								<div className='form-table'>
									<div className='form-table-row'>
										<label className='form-title' for='email'>
											Email
										</label>
										<div className='form-email-div'>
											<input
												className='form-input-email'
												id='email'
												tabIndex='2'
												type='text'
												name='email'
												data-qa-id='login-email-field'
												value=''
											/>
										</div>
									</div>
									<div className='form-table-row'>
										<label className='form-title' for='password'>
											Password
										</label>
										<Link className='forgot-password' tabIndex='3'>
											<span className='forgot-password-span'>
												Forgot password?
											</span>
										</Link>
										<div
											className='form-password-div'
											data-qa-id='empty-password-error-msg'
										>
											<input
												className='form-input-password'
												tabIndex='2'
												type='password'
												autoComplete='current-password'
												name='password'
												data-qa-id='login-password-field'
												value=''
											/>
										</div>
									</div>
									<div className='form-table-row'>
										<div className='second-migration'>
											<label className='second-migration-checkbox'>
												<input
													className='remember_me'
													name='remember_me'
													type='checkbox'
													checked=''
												/>
												<span className='checkbox_label' tabIndex='3'>
													Remember me
												</span>
											</label>
										</div>
										<div className='form-recaptcha'></div>
										<div className='form-table-row'>
											<div className='third-migration'>
												<button
													className='login-button'
													tabIndex='4'
													data-qa-id='finish-login-btn'
												>
													Log in
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div
							className='login-inner-second'
							style={{ height: '21px' }}
						></div>
					</div>
					<div className='clear-low' style={{ height: '21px' }}></div>
				</div>
			</div>
		</div>
	)
}

export default Login
