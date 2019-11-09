import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => (
    <div>
        <Head>
            <title>Contacts</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <div className='container'>
            <p>You can find us on <a href='https://www.facebook.com/St.AndrewsAthleticClub/'>Facebook here</a>. Or contact us using the form below.</p>
            <form>
                <label for='name'>Name: </label>
                <input id='name' type='text' />
                <label for='email'> Email address: </label>
                <input id='email' type='text' />
                <label for='message'>Message: </label>
                <textarea id='message' />
                <button>SUBMIT</button>
            </form>
        </div>
        <Footer />
        <style jsx>{`
            :global(body) {
            margin: 0;
            font-family: Baskerville Old Face, Hoefler Text, Times New Roman, serif;
            }
            .container { 
                padding: 15px;
                max-width: 800px;
                margin: auto;
            }
            a {
                color: #00AA4F;
                text-decoration: none;
              }
            form *{
                width: calc(100% - 30px);  
            }
            label {
                color: #00AA4F;
            }
            input,
            textarea{
                margin-top: 1em;
                margin-bottom: 2em;
                border: 1px solid #001F0E;
                border-radius: 2px;
                padding: 1em;
            }
            button {
                display: block;
                background: #00AA4F;
                color: #ffffff;
                font-size: 16px;
                padding: .9em;
                border: 0;  
                border-radius: 2px;
                max-width: 20em;
                margin: auto;
            }
            @media screen and (min-width: 600px){
                .container {
                  padding: 45px;
                }
            }
        `}</style>
    </div>
)

export default Contact