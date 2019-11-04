import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Timetable from '../components/Timetable'


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <div className='container'>
      <div className='hero-div'>
        <img className='track' src='/andrews-track.jpg' alt='running track' />
        <p className='blurb'>Ashbourne St. Andrews is an Athletics Club serving Ashbourne and surrounding areas. The club is based in Greenogue, where we have a six lane all weather floodlight track, facilities for track and field events and a clubhouse with changing facilities. Training days are Monday and Wednesday, for times see below. Ashbourne St. Andrews is an Athletics Ireland registered club.</p>
      </div>
      <Timetable />
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        Garamond, Baskerville, Baskerville Old Face, Hoefler Text, Times New Roman, serif;
      }
      .container {
        padding: 15px;
        max-width: 1000px;
        margin: auto;
      }
      img {
        max-width: 100%;
      }
      @media screen and (min-width: 600px){
        .container {
          padding: 45px;
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
