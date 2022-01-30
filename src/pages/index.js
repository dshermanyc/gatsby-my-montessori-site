import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/color-penicils.png';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import bgMaster from '../assets/images/bg-masthead.jpg';
import randa from '../assets/images/randa.jpg';
import deniz from '../assets/images/deniz.jpg';

const IndexPage = () => (
  <Layout>
    <Header />
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
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
              My Montessori offers two classes. A Junior class which is the 1st through 3rd-grade students taught by Randa Dobrayel. A Seniors class which is the 4th through 6th-grade students taught by Deniz Soyuer. Morning instruction is done separately by class and often collectively for afternoon lessons. This method fosters a sense of community and provides mentorship experiences.
              </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="featured-text text-center text-lg-left">
              <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
            </div>
          </div>
        </div>
        
        <div className="row align-items-center no-gutters mb-5">
          <div className="col-md-7">
              <h4>About The Curriculum</h4>
              <p>The tutors begin instruction Monday through Friday at 9am with pickup at 3:30pm.
              </p>
              <h5>Core subjects</h5>
              <ul><li>Mathematics</li><li>Geography</li><li>Social Studies</li><li>Science</li><li>Reading/English Language</li><li>Physical Education - twice weekly with a rotation of parent instructors</li><li>Second language - French</li></ul>
              <h5>Extracurriculars</h5>
              <ul><li>Music - weekly with a private music instructor</li><li>Dance - weekly with a private dance instructor</li><li>Art - weekly with a rotation of parent instructors</li><li>Computer Science Fundamentals - bi-weekly with a parent instructor </li><li>Latin - weekly</li><li>Chess - weekly with a private instructor</li></ul>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="featured-text text-center text-lg-left">
              <img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
              
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
              <p className="text-dark mb-5">Trained at the French University of St. Joseph in Beirut, Lebanon, Randa has dedicated over 30 years to educating children at the elementary level. Randa is a patient, creative and dedicated instructor that brings out the joy and a love of learning in each student. Randa teaches French to both the Juniors and Seniors and tutors French privately. She has a degree in Pre-School and Elementary Education and is certified in both first aid and CPR. Previously, Randa taught elementary French for five years at Notre Dame des Soeurs Antonines, taught Arabic for one year in Scarsdale, and at Our Montessori for over 25 years.</p>
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
    <Subscribe />
    <div className="photo-credit">Photo credit: <a href="https://www.flickr.com/photos/malindaratz/15189998922/">Malinda Rathnayake</a></div>
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
