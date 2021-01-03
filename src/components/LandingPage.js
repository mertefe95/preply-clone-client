import React from 'react';
import { Container, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";


const LandingPage = () => (
  <div>
    

    <Container maxWidth="sm">
    
    <div className="below-img-div">
    <Paper elevation={1}>
    <i className="globe-icon"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>uEA46-world</title><g id="Page-1" fill="none" fill-rule="evenodd"><g id="uEA46-world" transform="translate(-1 -1)" fill-rule="nonzero" fill="#B34646"><path d="M17 1c8.822 0 16 7.178 16 16 0 8.823-7.178 16.001-16 16.001-8.823 0-16-7.178-16-16.001C1 8.178 8.177 1 17 1zm3.293 28.656c5.171-1.348 9.108-5.773 9.712-11.201h-5.83a23.716 23.716 0 0 1-3.882 11.201zM3.995 18.455c.602 5.428 4.54 9.853 9.71 11.201A23.677 23.677 0 0 1 9.82 18.455H3.995zm9.712-14.11c-5.171 1.349-9.108 5.774-9.712 11.2h5.83a23.71 23.71 0 0 1 3.882-11.2zm-.98 11.2h8.548A20.756 20.756 0 0 0 17 4.711a20.785 20.785 0 0 0-4.273 10.834zm-.003 2.91A20.758 20.758 0 0 0 17 29.29a20.785 20.785 0 0 0 4.273-10.836h-8.55zm17.281-2.91c-.604-5.426-4.541-9.851-9.712-11.2a23.662 23.662 0 0 1 3.885 11.2h5.827z" id="Shape"></path></g></g></svg></i>
    <h2 className="globe-upper-header">Make the world your comfort zone</h2>
    <p className="globe-upper-p">Speak naturally with professional online tutors from 185 countries</p>
    

    <div className="marker-globe">
      <div className="tip-wrap-marker">
        <Link></Link>
        <svg class="globe-marker-icon" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 92" preserveAspectRatio="none"><defs><linearGradient id="a" x1="640" x2="640" y1="1351" y2="1443" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6ddae0" stop-opacity=".6"></stop><stop offset="1" stop-color="#3bb3bd"></stop></linearGradient></defs><path fill="#3bb3bd" d="M35 92s35-37.67 35-57a35 35 0 1 0-70 0c0 19.33 35 57 35 57z"></path><path fill="url(#a)" d="M640 1443s35-37.67 35-57a35 35 0 1 0-70 0c0 19.33 35 57 35 57z" transform="translate(-605 -1351)"></path></svg>
        <div className="photo-globe">
          <img src="https://avatars.preply.com/i/logos/i/logos/avatar_8jsfl8mgjmg.jpg" />
        </div>
      </div>
    </div>

    

      <div className="img-globe-div">
      <img className="img-globe" src="https://preply.com/static/ssr/_next/static/images/web-mob-05bc3d16799f18768729c5edb4901151.png"  />
      </div>

       <ul className="advantages-ul">
         <li className="advantages-li">
          <div className="advantages-icon">
            <svg width="16" height="24" viewBox="0 0 16 24" xmlns="http://www.w3.org/2000/svg"><title>certified_icon</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-188 -1780)" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g id="Columns" transform="translate(32 649)"><g id="1-column"><path d="M16 8c0 2.583-1.236 4.877-3.141 6.341l1.132 8.528a.998.998 0 0 1-1.506.99L8 21.166l-4.486 2.691a1 1 0 0 1-1.506-.989l1.133-8.527A7.983 7.983 0 0 1 0 8c0-4.41 3.589-8 8-8s8 3.59 8 8zm-4.264 13.076l-.751-5.659A7.954 7.954 0 0 1 8 16.001a7.96 7.96 0 0 1-2.984-.583l-.752 5.658 3.221-1.933a1.005 1.005 0 0 1 1.029 0l3.222 1.933zM2 8a6.007 6.007 0 0 0 6 6.001c3.308 0 6-2.692 6-6 0-3.309-2.692-6-6-6-3.309 0-6 2.691-6 6zm6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" transform="translate(124 12)" id="certified_icon"></path></g></g></g></g></g></svg>
          </div>
          <div>
            <p className="advantages-p">Expert Tutors</p>
            <p className="advantages-second-p">Find native speakers and certified private tutors</p>
          </div>
         </li>
         <li className="advantages-li">
            <div className="advantages-icon">
              <svg width="21" height="24" viewBox="0 0 21 24" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-483 -1780)" fill-rule="nonzero" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g id="Columns" transform="translate(32 649)"><g id="2-column" transform="translate(296)"><g id="verified_icon" transform="translate(109)"><g id="Group-2" transform="translate(14 12)"><path d="M21 3.863c0 2.2-.068 4.005-.143 5.285a20.613 20.613 0 0 1-.234 2.47 17.63 17.63 0 0 1-1.245 4.065 16.33 16.33 0 0 1-4.89 5.989A18.067 18.067 0 0 1 10.511 24a18.07 18.07 0 0 1-3.969-2.29 16.33 16.33 0 0 1-4.89-5.99 17.632 17.632 0 0 1-1.275-4.08 20.613 20.613 0 0 1-.234-2.47A91.25 91.25 0 0 1 0 3.885c2.5.073 4.98-.475 7.214-1.594A14.642 14.642 0 0 0 10.534 0a14.64 14.64 0 0 0 3.297 2.29A15.131 15.131 0 0 0 21 3.864zm-8.058.219A16.702 16.702 0 0 1 10.53 2.59 16.678 16.678 0 0 1 8.11 4.079a17.122 17.122 0 0 1-6.092 1.74c.023 1.18.065 2.28.124 3.283.026.747.096 1.492.202 2.178.23 1.246.609 2.46 1.114 3.58a14.337 14.337 0 0 0 4.296 5.258 16.06 16.06 0 0 0 2.751 1.687 16.147 16.147 0 0 0 2.776-1.728 14.287 14.287 0 0 0 4.269-5.206 15.569 15.569 0 0 0 1.097-3.56 18.95 18.95 0 0 0 .213-2.28c.057-.971.1-2.06.122-3.235a17.123 17.123 0 0 1-6.04-1.714zm-1.21 10.504L10.1 16.169l-1.621-1.583-2.855-2.808 1.62-1.583L10.1 13.01l4.618-4.51 1.64 1.57-4.624 4.516z" id="Combined-Shape"></path></g></g></g></g></g></g></g></svg>
            </div>
            <div>
              <p className="advantages-p">Verified profiles</p>
              <p className="advantages-second-p">We carefully check and confirm each tutor's profile</p>
            </div>


         </li>
       </ul>
    
      </Paper>
      </div>
    </Container>
  </div>
);

export default LandingPage;
