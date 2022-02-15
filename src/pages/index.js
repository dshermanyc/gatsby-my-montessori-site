import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import randa from '../assets/images/randa.jpg';
import deniz from '../assets/images/deniz.jpg';
import melloTower from '../assets/images/mello-bridge.jpg';
import science from '../assets/images/science.jpg';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-black mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              History
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">My Montessori History</h2>
            <p className="text-white-50">
            Heartbroken by the sudden closure of the Our Montessori School in Yorktown in 2020, a pioneering and dedicated small group of families formed a homeschool co-op called My Montessori. Using one of the original Our Montessori buildings, successfully hiring two of the wonderful instructors, and utilizing the same Montessori instructional methods and implements the homeschool ran uninterrupted during the 2020-2021 academic year.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row">
          <h3 className="mb-5 px-2">Our Program</h3>
        </div>
        <div className="row align-items-center no-gutters mb-5">
          <div className="col-md-7">
              <h4>About The Classes</h4>
              <p>
              My Montessori offers two classes. A Juniors class which is the 1st through 3rd-grade students taught by Randa Dobrayel. A Seniors class which is the 4th through 6th-grade students taught by Deniz Soyuer. Morning instruction is done separately by class and often collectively for afternoon lessons. This method fosters a sense of community and provides mentorship experiences.
              </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="featured-text text-center text-lg-left">
              <img className="img-fluid mb-3 mb-lg-0" src={science} alt="" />
            </div>
          </div>
        </div>
        
        <div className="row align-items-center no-gutters mb-5">
          <div className="col-md-7">
              <h4>About The Curriculum</h4>
              <p>The tutors hold instruction Monday through Friday.
              </p>
              <h5>Core subjects</h5>
              <ul><li>Mathematics</li><li>Geography</li><li>Social Studies</li><li>Science</li><li>Reading/English Language</li><li>Physical Education - twice weekly with a rotation of parent instructors</li><li>Second language - French</li></ul>
              <h5>Extracurriculars</h5>
              <ul><li>Music - weekly with a private music instructor</li><li>Dance - weekly with a private dance instructor</li><li>Art - weekly with a rotation of parent instructors</li><li>Computer Science Fundamentals - bi-weekly with a parent instructor </li><li>Latin - weekly</li><li>Chess - weekly with a private instructor</li></ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="featured-text text-center text-lg-left">
              <img className="img-fluid mb-3 mb-lg-0" src={melloTower} alt="" />
              
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters">
          <div className="col-md-12">
              <h4>About The Tutors</h4>
          </div>
        </div>

        <div className="row align-items-center no-gutters mb-5">
          <div className="col-md-7">
              <h5>Randa Dobrayel - Juniors Instructor</h5>
              <p className="text-dark mb-5">Trained at the French University of St. Joseph in Beirut, Lebanon, Randa has dedicated over 30 years to educating children at the elementary level. Randa is a patient, creative and dedicated instructor that brings out the joy and a love of learning in each student. Randa teaches French to the Juniors and tutors French privately. She has a degree in Pre-School and Elementary Education and is certified in both first aid and CPR. Previously, Randa taught elementary French for five years at Notre Dame des Soeurs Antonines, taught Arabic for one year in Scarsdale, and at Our Montessori for over 25 years.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="featured-text text-center text-lg-left">
              <img className="img-fluid mb-3 mb-lg-0" src={randa} alt="" />
              
            </div>
          </div>
        </div>

        <div className="row align-items-center no-gutters">
          <div className="col-md-7">
              <h5>Deniz Soyuer - Seniors Instructor</h5>
              <p className="text-dark">
              Trained at the St. Nicholas Training Centre, Deniz has dedicated more than 30 years educating children at the elementary level. Deniz is a wonderful and compassionate instructor, who is able to help children reach their fullest potential in their educational experience. She is experienced in and fully committed to the principles of the Montessori method. She values each child and encourages growth and individuality. Deniz has a Master’s degree in Architecture from the University of California at Berkeley. She is also certified in CPR as a professional rescuer and in the use of the Epi-Pen.  Previously, Deniz has taught Our Montessori for over 32 years.
              </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="featured-text text-center text-lg-left">
              <img className="img-fluid mb-3 mb-lg-0" src={deniz} alt="" />
              
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="faq" className="pb-5 bg-light">
      <div className="container">
        <h3 className='py-5'>FAQs</h3>
        <h4>Why do I have to file homeschool paperwork for my district?</h4>
        <p>As we are a parent/caregiver and tutor-run learning group, we are not a formal school. Thus, each family must file a request to homeschool their child depending on their district’s directives (contact your local district for more information). In most cases, a letter requesting homeschool is required before the start of the school year as well as a curriculum plan. Former families and tutors will help new families with their curriculum planning. Families are also required to submit quarterly reports of the process to their district. These are created as a group each quarter. Tutors, in-classroom parents, and families help to organize what is needed for these reports to cover academic requirements within most districts.</p>
        <h4>Why a co-op?</h4>
        <p>We decided to run a co-op to provide a manageable degree of family involvement and keep costs down. This means that parent involvement in extracurricular activities and administrative work keeps our costs down as we provide our time with students on a voluntary basis. If it happens we don’t have a parent/family member that can provide specialized assistance, then a contract employee is hired to cover that activity (such as gym, music, etc…).</p>
        <h4>Do you have field trips?</h4>
        <p>Yes! We have a dedicated group of parents each year that organize local educational excursions to various places in the area. As we are not a formal school, assistance with transportation is always appreciated.</p>
        <h4>Is lunch provided?</h4>
        <p>Students bring their own lunch each day. Families can also pack a snack for students as there is dedicated time for this as well. There are occasionally special treats for holiday celebrations.</p>
        <h4>What is a typical school calendar?</h4>
        <p>We tend to follow a calendar similar to most public schools for most major federal holidays. However, we do start later in September and end earlier in June as the requirement for contact hours for homeschool is less than public school hours. We also have two-week-long breaks during the spring semester that at times are not the same as most local districts.</p>
        <h4>What is your snow day policy?</h4>
        <p>For ease in decision making, we follow the Yorktown school district’s decisions on school cancellations. </p>
        <h4>What is your COVID policy?</h4>
        <p>We follow current CDC directives. We ask that children are masked if that is recommended and maintain space inside the classroom while having meals. As we have small numbers, we feel more confident in our safety. </p>
        <h4>What is your vaccine health policy? </h4>
        <p>We strongly encourage any family wishing to join our group to obtain a vaccination for COVID-19 as well as others recommended by their family physicians.</p>
        <h4>What supplies must I buy for my child?</h4>
        <p>None! They are included in the yearly cost. If anything, there may be a nominal expense for field trips. </p>
        <h4>How are school decisions made? </h4>
        <p>We make decisions based on parent/caregiver consensus with direct input from the tutors as well as from the Sarah Beth Academy (SBA). </p>
        <h4>What is SBA? </h4>
        <p><a href="https://www.sarahbethacademy.com/">Sarah Beth Academy’s</a> (SBA) mission is to educate, inspire and change lives while providing an optimal safe learning environment that recognizes each child is an individual and all children need to succeed. We are a subsidiary of this homeschool co-op program with 175+ students based in Long Island. Their model has been a great example for us to reference and we hope to continue to grow with them in the future. </p>
      </div>

    </section>
    <Subscribe />
    <div className="photo-credit">Photo credit: <a href="https://www.flickr.com/photos/malindaratz/15189998922/">Malinda Rathnayake</a></div>
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
