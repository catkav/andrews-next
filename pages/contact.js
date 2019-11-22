import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact = () => {
    const [status, setStatus] = React.useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })

    const [inputs, setInputs] = React.useState({
        name: '',
        email: '',
        message: ''
    })

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg }
            })
            setInputs({
                name: '',
                email: '',
                message: ''
            })
        } else {
            setStatus({
                info: { error: true, msg: msg }
            })
        }
    }

    const handleOnSubmit = async e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        const text = await res.text()
        handleResponse(res.status, text)
    }

    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null }
        })
    }

    return (
        <div>
            <Head>
                <title>Contacts</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <div className='container'>
                <p>You can find us on <a href='https://www.facebook.com/St.AndrewsAthleticClub/'>Facebook here</a>. Or contact us using the form below.</p>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input id='name'
                        type='text'
                        onChange={handleOnChange}
                        required
                        value={inputs.name} />
                    <label htmlFor='email'> Email address: </label>
                    <input id='email'
                    type='email'
                    onChange={handleOnChange}
                    required
                    value={inputs.email} />
                    <label htmlFor='message'>Message: </label>
                    <textarea id='message'
                        onChange={handleOnChange}
                        required
                        value={inputs.message} />
                    <button disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                            : 'Submitting...'}
                    </button>
                </form>
                {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && (
                    <div className="success">{status.info.msg}</div>
                )}
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
                div.error, div.success{
                    text-align: center;
                    padding: 2em;
                }
                @media screen and (min-width: 600px){
                    .container {
                    padding: 45px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Contact