import React from 'react'

function BecomeATutor() {
	return (
		<div className='teach-layout'>
			<div className='teach-form-wrapper'>
				<form
					id='tutor-signup'
					autocomplete='off'
					method='post'
					className='teach-form'
				>
					<h1 className='teach-online-title'>
						<span>Teach online with Preply</span>
					</h1>
					<p className='teach-online-p'>
						<span>
							Earn money sharing your expert knowledge from the comfort of your
							home.
						</span>
					</p>
					<div className='button-wrapper'>
						<a
							className='FacebookOAuthButton'
							href='/login/facebook/?tutor_flow=1&amp;prev=/en/tutor/edit&amp;timezone=Europe/Istanbul'
						>
							<svg
								className='SvgFacebookLogo-sc-19f6qh1-0 eivQKx'
								xmlns='http://www.w3.org/2000/svg'
								width='28'
								height='28'
								viewBox='0 0 28 28'
							>
								<path
									d='M0 4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z'
									fill='#fff'
								></path>
								<path
									d='M15.73 23v-7.754h2.6l.39-3.023h-2.99v-1.93c0-.874.243-1.47 1.5-1.47h1.6v-2.7A21.335 21.335 0 0 0 16.5 6a3.641 3.641 0 0 0-3.887 3.994v2.23H10v3.022h2.61V23z'
									fill='#3b5998'
								></path>
							</svg>
							<span>Sign up with Facebook</span>
						</a>
						<a
							className='GoogleOAuthButton'
							href='/login/google-oauth2/?tutor_flow=1&amp;prev=/en/tutor/edit&amp;timezone=Europe/Istanbul'
						>
							<svg
								className='SvgGoogleLogo-sc-19f6qh1-1 kYuwuk'
								xmlns='http://www.w3.org/2000/svg'
								width='28'
								height='28'
								viewBox='0 0 28 28'
							>
								<path
									d='M0 4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z'
									fill='#fff'
								></path>
								<path
									d='M21.68 14.186a9.15 9.15 0 0 0-.145-1.636H14v3.1h4.3a3.68 3.68 0 0 1-1.6 2.414v2.007h2.586a7.8 7.8 0 0 0 2.394-5.885z'
									fill='#4285f4'
								></path>
								<path
									d='M14 22a7.636 7.636 0 0 0 5.294-1.938l-2.586-2.007a4.827 4.827 0 0 1-7.185-2.535H6.85v2.073A8 8 0 0 0 14 22z'
									fill='#34a853'
								></path>
								<path
									d='M9.524 15.523a4.737 4.737 0 0 1 0-3.04V10.41H6.852a8.013 8.013 0 0 0 0 7.185l2.674-2.072z'
									fill='#fbbc05'
								></path>
								<path
									d='M14 9.182a4.318 4.318 0 0 1 3.057 1.2l2.295-2.294A7.691 7.691 0 0 0 14 6a8 8 0 0 0-7.15 4.408l2.674 2.072A4.768 4.768 0 0 1 14 9.18z'
									fill='#ea4335'
								></path>
							</svg>
							<span>Sign up with Google</span>
						</a>
					</div>
					<div className='option-container'>
						<hr className='option-hr' />
						<span className='option-span'>or</span>
						<hr className='option-second-hr' />
					</div>
					<div className='form-inputs'>
						<label>Email address</label>
						<div className='form-input-item'>
							<input
								type='email'
								id='upperform-signup-email-input'
								placeholder='Email address'
								className='form-input form-input-email'
							/>
						</div>
						<label htmlFor='upperform-signup-pw-input'>Password</label>
						<div className='form-input-item'>
							<input
								type='password'
								id='upperform-signup-pw-input'
								placeholder='Create password'
								className='form-input-password'
							/>
						</div>
					</div>
					<div className='captcha-wrapper'>
						<div></div>
					</div>
					<div className='button-wrapper-2'>
						<button className='button-wrapper-2-btn' data-qa-id='submit'>
							Sign up with email
						</button>
					</div>
					<div className='agreement-text'>
						"By clicking Sign up with, you agree to Preply’s"
						<a
							target='_blank'
							href='https://preply.com/static/Preply-Terms-of-Service.pdf'
						>
							Terms of Service
						</a>
						and
						<a
							target='_blank'
							href='https://preply.com/static/Privacy_Policy.pdf'
						>
							Privacy Policy
						</a>
					</div>
				</form>
			</div>
			<div className='teach-banner-wrapper'></div>
			<div className='teach-feature-list'></div>
			<div className='teach-reviews-block'></div>
			<div className='teach-accordion'></div>
			<div className='teach-below-form-wrapper'></div>
			<picture className='teach-picture'>
				<source
					srcSet='https://preply.com/static/ssr/_next/static/images/partners-4683bed16523ba13da53f0840b740e93.webp'
					media='(min-width: 480px)'
					type='image/webp'
				/>
				<source
					srcSet='https://preply.com/static/ssr/_next/static/images/partners-26a3ff6ad2254a60e876a5cd5aed32aa.jpg'
					media='(min-width: 480px)'
					type='image/jpg'
				/>
				<source
					srcSet='https://preply.com/static/ssr/_next/static/images/partners-mobile-0ccc79924457be4f1fbbf8036efd354e.webp'
					media='(max-width: 479px)'
					type='image/webp'
				/>
				<source
					srcSet='https://preply.com/static/ssr/_next/static/images/partners-mobile-82c55246622a77aa6f476f797956c3b3.jpg'
					media='(max-width: 479px)'
					type='image/jpg'
				/>
				<img
					src='https://preply.com/static/ssr/_next/static/images/partners-26a3ff6ad2254a60e876a5cd5aed32aa.jpg'
					alt=''
					className='teach-pic-img'
				/>
			</picture>
			aasdasdasd
		</div>
	)
}

export default BecomeATutor
