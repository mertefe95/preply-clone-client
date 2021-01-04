import React from 'react';
import { Container, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";


const LandingPage = () => (
  <div>
      
      <div className="main-img-div">
        <img className="img-class" src="https://preply.com/static/ssr/_next/static/images/tutor-large-1-1c240a3731e85e892830d732fe7ff9d7.webp" />
      </div>

      <div className="language-main-wrapper">
        <div className="language-second-wrapper">
          <div className="languages">

          </div>
        </div>
      </div>
  



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
       

       <li className="advantages-li">
         <div className="advantages-icon">
          <svg width="23" height="23" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><title>Shape</title><g id="Page-1" fill="none" fill-rule="evenodd"><g id="1.5_TutorProfile-What_happens_next" transform="translate(-961 -310)" fill-rule="nonzero" fill="#FFF"><g id="Tooltip" transform="translate(948 149)"><g id="icon_contacts" transform="translate(12 160)"><path d="M8 1a6.99 6.99 0 0 0-7 7c0 3.873 3.127 7 7 7s7-3.127 7-7a7 7 0 0 0-7-7zm3.858 11.262a3.052 3.052 0 0 0-1.494-1.026l-.902-.265c-.31-.093-.466-.42-.373-.731.015-.062.062-.124.093-.171l.654-.731a2.25 2.25 0 0 0 .56-1.774l-.11-.886a2.281 2.281 0 0 0-1.026-1.65h-.016a2.287 2.287 0 0 0-2.504.032 2.225 2.225 0 0 0-.964 1.524l-.14.934a2.278 2.278 0 0 0 .544 1.866l.622.685a.37.37 0 0 1 .094.171.57.57 0 0 1-.374.731l-.902.265a3.052 3.052 0 0 0-1.493 1.026A5.734 5.734 0 0 1 2.244 8 5.762 5.762 0 0 1 8 2.244 5.762 5.762 0 0 1 13.756 8c0 1.68-.732 3.204-1.898 4.262z" id="Shape"></path></g></g></g></g></svg>
         </div>
         <div>
           <p className="advantages-p">Learn anytime</p>
           <p className="advantages-second-p">Take online lessons at the perfect time for your busy schedule</p>
         </div>
       </li>

      <li className="advantages-li">
        <div className="advantages-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web_Hovers" transform="translate(-1072 -1780)" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g id="Columns" transform="translate(32 649)"><g id="4-column" transform="translate(888)"><g id="prices_icon" transform="translate(108)"><path d="M12 0c6.616 0 12 5.383 12 12s-5.384 12-12 12S0 18.618 0 12 5.384 0 12 0zm0 21.819c5.414 0 9.818-4.405 9.818-9.818 0-5.415-4.404-9.819-9.818-9.819-5.413 0-9.818 4.404-9.818 9.819 0 5.413 4.405 9.818 9.818 9.818zm0-17.455c4.21 0 7.636 3.426 7.636 7.637 0 4.21-3.426 7.636-7.636 7.636S4.364 16.21 4.364 12c0-4.211 3.425-7.637 7.636-7.637zm0 13.091a5.46 5.46 0 0 0 5.455-5.454A5.46 5.46 0 0 0 12 6.546a5.46 5.46 0 0 0-5.455 5.455A5.46 5.46 0 0 0 12 17.455zm0-8.727A3.276 3.276 0 0 1 15.273 12 3.277 3.277 0 0 1 12 15.273a3.277 3.277 0 0 1-3.273-3.272A3.276 3.276 0 0 1 12 8.728zm0 4.363c.601 0 1.09-.49 1.09-1.09a1.092 1.092 0 0 0-2.18 0c0 .6.489 1.09 1.09 1.09z" transform="translate(12 12)" id="Combined-Shape"></path></g></g></g></g></g></g></svg>
        </div>
        <div>
          <p className="advantages-p">Affordable prices</p>
          <p className="advantages-second-p">Choose an experienced tutor that fits your budget.</p>
        </div>
      </li>
      </ul>

      <div className="skills-icon-break">
      <span class="skills-top-icon"><svg width="34" height="24" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg"><title>Shape</title><g id="Page-1" fill="none" fill-rule="evenodd"><g id="Artboard" transform="translate(-15 -20)" fill-rule="nonzero" fill="#3BB3BD"><g id="tutoring_icon"><g id="graduation_cap" transform="translate(15 20)"><path d="M17 .93l.498.265 14.344 7.438 1.826.93-1.826.93-4.217 2.157v5.412c0 .47-.216.893-.465 1.163-.249.27-.552.431-.863.597-.627.328-1.37.56-2.291.764-1.843.41-4.3.664-7.006.664-2.706 0-5.163-.253-7.006-.664-.921-.203-1.664-.436-2.29-.764-.312-.166-.615-.328-.864-.597a1.763 1.763 0 0 1-.465-1.163V12.65L4.25 11.555v7.869a2.106 2.106 0 0 1 1.063 1.826c0 1.175-.95 2.125-2.125 2.125a2.124 2.124 0 0 1-2.126-2.125c0-.784.428-1.457 1.063-1.826v-8.965L.332 9.563l1.826-.93 14.344-7.438L17 .93zm0 2.39L4.98 9.562l1.893.963c.24-.253.531-.44.83-.597.623-.328 1.37-.56 2.291-.764C11.833 8.754 14.281 8.5 17 8.5c2.719 0 5.167.253 7.006.664.921.203 1.668.436 2.29.764.3.157.59.344.831.597l1.893-.963L17 3.32zm0 7.305c-2.594 0-4.927.237-6.541.598-.805.178-1.453.386-1.793.564-.108.058-.124.1-.166.133v4.05c.444-.161.93-.306 1.494-.43 1.843-.412 4.3-.665 7.006-.665 2.706 0 5.163.253 7.006.664.564.125 1.05.27 1.494.432V11.92c-.042-.033-.058-.075-.166-.133-.34-.178-.988-.386-1.793-.564-1.614-.361-3.947-.598-6.541-.598zM17 17c-2.577 0-4.922.237-6.541.598a7.618 7.618 0 0 0-1.461.465c.365.157.789.315 1.461.464 1.619.361 3.964.598 6.541.598 2.577 0 4.922-.237 6.541-.598a7.618 7.618 0 0 0 1.461-.465 7.618 7.618 0 0 0-1.461-.464C21.922 17.237 19.577 17 17 17z" id="Shape"></path></g></g></g></g></svg></span>
      </div>
      <div className="skills-title">
        <h2 className="skills-h2">Focus on the skills you need</h2>
        <p className="skills-p">Prepare to achieve your goals with private tutors</p>
      </div>

      <ul className="skills-ul">
        <li className="skills-li">
          <div className="skills-svg-div">
          <svg width="16" height="20" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg"><title>Shape</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-80 -2172)" fill-rule="nonzero" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g transform="translate(32 1039)" id="Block"><g id="bookmark_icon"><g id="bookmark" transform="translate(16 14)"><path d="M8 15.229l-6.419 4.585A1 1 0 0 1 0 19V3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.581.814L8 15.229zm6 1.828V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14.057l5.419-3.87a1 1 0 0 1 1.162 0L14 17.056z" id="Shape"></path></g></g></g></g></g></g></svg>
          </div>
          <div className="skills-title">
            <p className="skills-title-p">Immerse yourself in a new culture</p>
            <p className="skills-second-p">Connect with language experts from around the world</p>
          </div>
        </li>

        <li className="skills-li">
          <div className="skills-svg-div">
            <svg width="20" height="22" viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg"><title>Shape</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-670 -2171)" fill-rule="nonzero" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g transform="translate(624 1039)" id="Block"><g id="zap_icon"><g id="zap" transform="translate(15 14)"><path d="M7.867 13H0a1 1 0 0 1-.768-1.64l10-12c.639-.767 1.884-.227 1.76.764L10.132 7H18a1 1 0 0 1 .768 1.64l-10 12c-.639.767-1.884.227-1.76-.764L7.868 13zm-5.732-2H9a1 1 0 0 1 .992 1.124l-.577 4.616L15.865 9H9a1 1 0 0 1-.992-1.124l.577-4.616L2.135 11z" id="Shape"></path></g></g></g></g></g></g></svg>
          </div>
          <div className="skills-title">
            <p className="skills-title-p">Succeed in your career</p>
            <p className="skills-second-p">Develop your working vocabulary and communicate clearly</p>
          </div>
        </li>

        <li className="skills-li">
          <div className="skills-svg-div">
            <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-77 -2291)" fill-rule="nonzero" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g transform="translate(32 1159)" id="Block"><g id="clock_icon"><g id="clock" transform="translate(13 13)"><path d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm1-15v5.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 10 11V5a1 1 0 0 1 2 0z" id="Combined-Shape"></path></g></g></g></g></g></g></svg>
          </div>
          <div className="skills-title">
            <p className="skills-title-p">Get expert help when you need it</p>
            <p className="skills-second-p">Learn to solve any problem in any language</p>
          </div>
        </li>

        <li className="skills-li">
          <div className="skills-svg-div">
            <svg width="20" height="24" viewBox="0 0 20 24" xmlns="http://www.w3.org/2000/svg"><title>Oval</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-670 -2290)" fill-rule="nonzero" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g transform="translate(624 1159)" id="Block"><g id="pin_icon"><g id="map-pin" transform="translate(14 12)"><path d="M15.226 19.813a31.132 31.132 0 0 1-4.254 3.726c-.195.141-.337.24-.417.293a1 1 0 0 1-1.11 0c-.08-.054-.222-.152-.417-.293a31.132 31.132 0 0 1-4.254-3.726C1.802 16.676 0 13.372 0 10 0 4.477 4.477 0 10 0s10 4.477 10 10c0 3.372-1.802 6.676-4.774 9.813zm-4.443 1.358a29.155 29.155 0 0 0 2.991-2.734C16.427 15.637 18 12.753 18 10a8 8 0 0 0-16 0c0 2.753 1.573 5.636 4.226 8.437A29.155 29.155 0 0 0 10 21.773c.242-.18.505-.38.783-.602zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" id="Oval"></path></g></g></g></g></g></g></svg>
          </div>
          <div className="skills-title">
            <p className="skills-title-p">Speak naturally, always</p>
            <p className="skills-second-p">Make a good impression and build trust in any language</p>
          </div>
        </li>
      </ul>


      <div className="skills-icon-break bottom-clock">
      <span class="skills-top-icon"><svg width="32" height="32" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><title>Combined Shape</title><g id="Main-Page" fill="none" fill-rule="evenodd"><g id="01_1_Main_page_Web" transform="translate(-77 -2291)" fill-rule="nonzero" fill="#3BB3BD"><g id="Online-tutoring" transform="translate(32 1119)"><g transform="translate(32 1159)" id="Block"><g id="clock_icon"><g id="clock" transform="translate(13 13)"><path d="M11 22C4.925 22 0 17.075 0 11S4.925 0 11 0s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm1-15v5.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 10 11V5a1 1 0 0 1 2 0z" id="Combined-Shape"></path></g></g></g></g></g></g></svg></span>
      </div>
      
      <div className="skills-title">
        <h2 className="skills-h2">Request a private tutor</h2>
        <p className="skills-subtitle">Post your requirements and let tutors find you</p>
      </div>

      <div className="private-tutor-button">
        <Link className="private-tutor-link">Post Request</Link>
      </div>

      </Paper>
      </div>

      <div>
        <div className="wrap-div">
          <div className="success-wrap-div">
            <h2 className="success-story-h2">Read our success stories</h2>
            <p className="skills-subtitle">Preply tutors have helped thousands of people prepare to speak confidently</p>
          </div>
        </div>

        <Paper elevation={1}>
            <div>
              <div className="success-img">

              </div>
              <h4 className="success-card-title">PHILIP</h4>
              <p className="success-card-text">Studying Russian language for 2 years</p>
              <p className="success-card-subtext">"My tutors on Preply are very open, perfectly prepared and try to make it challenging for me but not too hard, and not too easy. Choosing online studies
              was the best way to do it - the internet is fast, cheap and popular and it's easy to communicate in social media with native speakers.""
              </p>
            </div>
        </Paper>


      <div className="slider">
        <div className="sliders">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src="" alt="" />
          </div>
          <div className="slide">
            <img src="" />
          </div>  
          <div className="slide">
            <img src="" />
          </div>
          <div className="slide">
            <img src="2.jpg" alt="" />
          </div>
        </div>
      </div>

      </div>


    </Container>
  </div>
);

export default LandingPage;
