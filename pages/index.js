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
    <img className='track' src='/andrews-track.jpg' alt='running track' />
    <p>Ashbourne St. Andrews is an Athletics Club serving Ashbourne and surrounding areas. The club is based in Greenogue, where we have a six lane all weather floodlight track, facilities for track and field events and a clubhouse with changing facilities. Training days are Monday and Wednesday, for times see below. Ashbourne St. Andrews is an Athletics Ireland registered club.</p>
    <Timetable />
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        Garamond, Baskerville, Baskerville Old Face, Hoefler Text, Times New Roman, serif;
      }
      .container {
        padding: 15px;
      }
      img {
        max-width: 100%;
      }
      @media screen and (min-width: 600px){
        img.track {
          max-width: 320px;
        }
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
