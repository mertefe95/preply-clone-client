import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiOutlineYoutube } from 'react-icons/ai'
import { FaInstagramSquare, FaVk, FaYoutube } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import Flags from 'country-flag-icons/react/3x2'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import Flag from 'react-world-flags'
import { US } from 'country-flag-icons/commonjs/react/3x2'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='upper-footer'>
				<div className='upper-first-div'>
					<div className='about-us-ul-div'>
						<h5 className='upper-footer-li footer-h'>About Us</h5>
						<ul className='about-us-ul upper-first-ul'>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Help</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>How it works</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Scholarship</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Education partners</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Preply Blog</Link>
							</li>
							<li className='upper-footer-li'>
								<a>Media Kit</a>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Status</Link>
							</li>
						</ul>
					</div>

					<div className='about-us-ul-div'>
						<h5 className='upper-footer-li footer-h'>Learn</h5>
						<ul className='learn-ul upper-first-ul'>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Questions and Answers</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Find a private tutor</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Affiliate program</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Referral program</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Enterprise</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>E-Learning Index 2020</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>How to learn English</Link>
							</li>
						</ul>
					</div>
					<div>
						<h5 className='upper-footer-li footer-h'>Job opportunities</h5>
						<ul className='job-ul upper-first-ul'>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Become a tutor</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Tutoring jobs</Link>
							</li>
							<li className='upper-footer-li'>
								<Link className='upper-links'>Work at Preply!</Link>
							</li>
						</ul>
						<div>
							<h5 className='upper-footer-li footer-h'>Preply Global</h5>
							<ul className='preply-global-ul upper-first-ul'>
								<li className='upper-footer-li'>
									<Link className='upper-links'>Germany</Link>
								</li>
								<li className='upper-footer-li'>
									<Link className='upper-links'>Italy</Link>
								</li>
								<li className='upper-footer-li'>
									<Link className='upper-links'>Spain</Link>
								</li>
								<li className='upper-footer-li'>
									<Link className='upper-links'>Russia</Link>
								</li>
								<li className='upper-footer-li'>
									<Link className='upper-links'>France</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='upper-below-div'>
					<ul className='support-ul upper-second-ul'>
						<li className='upper-footer-li footer-h'>Support</li>
						<li className='upper-footer-li'>Need any help?</li>
						<li className='upper-footer-li upper-links'>support@preply.com</li>
					</ul>
					<ul className='contacts-ul upper-second-ul'>
						<li className='upper-footer-li footer-h'>Contacts</li>
						<li className='upper-footer-li'>
							<Flag code={'US'} className='usa-flag' />
							USA
						</li>
						<li className='upper-footer-li'>
							1371 Beacon Street, Suite 301, Brookline,
						</li>
						<li className='upper-footer-li'>MA, 02446</li>
					</ul>
					<ul className='preply-social-ul upper-second-ul'>
						<li className='upper-footer-li footer-h'>Preply Social</li>
						<li className='upper-footer-li'>
							<a href='#' className='upper-links'>
								<AiFillFacebook className='facebook-icon icon'></AiFillFacebook>
								Facebook
							</a>
						</li>
						<li className='upper-footer-li'>
							<a href='#' className='upper-links'>
								<FaInstagramSquare className='instagram-icon icon'></FaInstagramSquare>
								Instagram
							</a>
						</li>
						<li className='upper-footer-li'>
							<a href='#' className='upper-links'>
								<FaVk className='vk-icon icon'></FaVk>VK
							</a>
						</li>
						<li className='upper-footer-li'>
							<a href='#' className='upper-links'>
								<IoLogoYoutube className='youtube-icon icon'></IoLogoYoutube>
								Youtube
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='lower-footer'>
				<div className='lower-upper-div'>
					<ul className='specialties-ul lower-ul'>
						<li className='below-footer-li'>Specialities</li>
						<li className='below-footer-li'>
							<Link className='below-links'>American English tutors</Link>
						</li>
					</ul>

					<ul className='top-subjects-ul lower-ul'>
						<li className='below-footer-li'>Top subjects</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Portugese tutors</Link>{' '}
							<Link className='below-links'>English tutors</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Spanish tutors </Link>{' '}
							<Link className='below-links'>French tutors</Link>
						</li>
					</ul>

					<ul className='tutors-near-ul lower-ul'>
						<li className='below-footer-li'>Tutors near you</li>
						<li className='below-footer-li'>
							<Link className='below-links'>English tutor in NYC</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>French tutors in Los Angeles</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Spanish tutor in San Diego</Link>
						</li>
					</ul>

					<ul className='other-languages-ul lower-ul'>
						<li className='below-footer-li'>Other languages</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Cours Particuliers D'Anglais</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>English Nachhilfe</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>
								Репетиторы Английского Языка Онлайн
							</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Corso Di Inglese</Link>{' '}
							<Link className='below-links'>Professores De Inglês Online</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Profesores De Inglés Online</Link>
						</li>
					</ul>
				</div>
				<div className='lower-lower-div'>
					<p> &copy;2012-2021 Preply Inc.</p>
					<ul className='lowest-ul'>
						<li className='below-footer-li'>
							<Link className='below-links'>Terms of Service</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Privacy Policy</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Cookie Policy</Link>
						</li>
						<li className='below-footer-li'>
							<Link className='below-links'>Refund Policy</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
