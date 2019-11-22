import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'
import Timetable from '../components/Timetable'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => (
  <div className='page-home'>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <div className='container'>
      <div className='hero-div'>
        <img className='track' src='/andrews-track.jpg' alt='running track' />
        <p className='blurb'>Ashbourne St. Andrews is an Athletics Club serving Ashbourne and surrounding areas. The club is based in Greenogue, less than a ten minute drive from Ashbourne. There is a six lane all weather floodlight track, facilities for track and field events and a clubhouse with changing facilities. Training days are Monday and Wednesday, for times see below. Ashbourne St. Andrews is an <a href='https://www.athleticsireland.ie/' target='_blank'>Athletics Ireland</a> registered club.</p>
      </div>
      <Timetable />
      <Contact />
      <Link href=''><a className='code'>Download our Code of Ethics</a></Link>
      <h2>History of the Club</h2>
      <p>Our club was founded on September 13th, 1955 in Fairyhouse Racecourse, Ratoath. The club moved to our grounds in Greenogue in 1964. In 1968 we had the official opening of our Pavillion building. The building was named the Arkle pavilion after the famous racehorse who made a guest appearance at a fund raising event for our club 2 years earlier!</p>
      <p>We initially had a grass track but after many years of fundraising we were able to construct a flood lit, all weather 400m track in the late 1990s.</p>
      <p>After more than 40 years the Arkle pavilion was replaced with our new club house in 2007.</p>
      <p>We have more than 150 registered members from age 8 and upwards. Our club members have represented Ireland in sprinting, cross country, throwing, high jump and race walking.</p>
      <p>We train Mondays, Tuesdays and Wednesdays. These training sessions cover sprints, long jump, hurdles and throw squads for both adult and junior members.</p>
      <p>Our involvement with the local community includes hosting the annual community games, facilitating local TY students who are participating in the Gaisce awards and forging links with local charities and other local clubs.</p>
      <h2>Get Directions</h2>
      <p>View on <Link href='https://www.google.com/maps/dir/Ashbourne,+County+Meath/St.+Andrews+Athletic+Club,+Rath,+Co.+Meath/@53.4971812,-6.3887197,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x486714c461df76ad:0xa00c7a99731ecc0!2m2!1d-6.3973818!2d53.5111621!1m5!1m1!1s0x48671478c78ab317:0xf842f6b8e784dd31!2m2!1d-6.3485004!2d53.4831519!3e0'><a className='map-link'>Google Maps</a></Link></p>
      <a href='https://www.google.com/maps/dir/Ashbourne,+County+Meath/St.+Andrews+Athletic+Club,+Rath,+Co.+Meath/@53.4971812,-6.3887197,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x486714c461df76ad:0xa00c7a99731ecc0!2m2!1d-6.3973818!2d53.5111621!1m5!1m1!1s0x48671478c78ab317:0xf842f6b8e784dd31!2m2!1d-6.3485004!2d53.4831519!3e0' target='_blank'>
      <img className='directions' src='/standrews-directions.png' alt='driving from Ashbourne to Greenogue'/>
      </a>
    </div>
    <Footer />
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Baskerville Old Face, Hoefler Text, Times New Roman, serif;
      }
      .page-home {
        position: relative;
      }
      h2{
        margin-top: 2em;
      }
      a {
        color: #00AA4F;
        text-decoration: none;
      }
      a.code {
        display: block;
        margin-top: 1.25em;
        margin-bottom: 1.25em;
      }
      .container {
        padding: 15px 15px 70px;
        max-width: 1000px;
        margin: auto;
      }
      img {
        max-width: 100%;
      }
      img.directions {
        border: 2px solid #00AA4F;
        max-height: 70vh;
        display: block;
        margin: 3em auto;
      }
      p{
        font-size: 1.25em;
        line-height: 1.5;
      }
      @media screen and (min-width: 600px){
        .container {
          padding: 45px 45px 90px;
        }
        .hero-div {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-column-gap: 3%;
        }
        .blurb {
          margin-top: 0;
        }
      }
    `}</style>
  </div>
)

export default Home
