import React from "react";

const Journey = () => {
  return (
    <>
      <section id='resume' className='section timeline'>
        <div className='container'>
          <div className='row'>
            <div className='section-title animate-top'>
              <h2 data-heading='My journey in'>Web Development</h2>
              <div className='lines'>
                <div className='diamond'></div>
              </div>
            </div>
          </div>
          <div className='row section-center timeline-center'>
            <article className='timeline-item animate-left'>
              <h3>Front-end Developer</h3>
              <div className='title'>
                <h4>Passbolt,</h4>
                <h4>2019 - 2020</h4>
              </div>
              <p>
                Passbolt is a small software company based in Luxembourg. I
                functioned as a front-end developer helping them to add features
                and improve their addon-based software.
              </p>
              <span className='number'></span>
            </article>
            <article className='timeline-item animate-right'>
              <h3>Member Technical Staff</h3>
              <div className='title'>
                <h4>Zoho,</h4>
                <h4>2013 - 2019</h4>
              </div>
              <p>
                I am a core and founding member to develop Zoho WorkDrive, a
                Team based Document Management System product from scratch.
                Worked with Product Management team for deriving product use
                cases and served as a single point of contact for the Web UI
                teams for integrating UI modules.
              </p>
              <span className='number'></span>
            </article>
            <article className='timeline-item animate-left'>
              <h3>Associate Engineer</h3>
              <div className='title'>
                <h4>Zoho,</h4>
                <h4>2012 - 2013</h4>
              </div>
              <p>
                Worked in the product team called Zoho Docs(Cloud DMS) as an
                Associate Engineer. In this period I worked in JavaScript,
                jQuery components, widgets and AJAX promises and Rest APIs.
              </p>
              <span className='number'></span>
            </article>
          </div>
        </div>
      </section>
      <section className='section education'>
        <div className='container section-center'>
          <div className='row'>
            <div className='section-title animate-top'>
              <h2 data-heading='Education'>Timeline</h2>
              <div className='lines'>
                <div className='diamond'></div>
              </div>
            </div>
          </div>
          <div className='row timeline'>
            <div className='timeline-container'>
              <div className='left-text text-wrapper'>
                <div className='text'>
                  <h3>BA English</h3>
                  <p>Annamalai University</p>
                  <p>2017 - 2020</p>
                </div>
              </div>
              <div className='right-text text-wrapper'>
                <div className='text'>
                  <h3>ZU Intern</h3>
                  <p>Zoho University</p>
                  <p>2011 - 2012</p>
                </div>
              </div>
              <div className='left-text text-wrapper'>
                <div className='text'>
                  <h3>High School</h3>
                  <p>GGHRS</p>
                  <p>2010 - 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
