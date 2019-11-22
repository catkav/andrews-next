import React from 'react'
import Link from 'next/link'

class Contact extends React.Component {
    render() {
        return (
            <section>
                <h2>Interested in joining or want to find out more?</h2>
                <Link href='/contact'>
                    <button>Contact us</button>
                </Link>
                <p>Or drop by a training session, September - December or January - June</p>
                <style jsx>{`
                section {
                    background: #00AA4F;
                    color: #ffffff;
                    width: 100vw;
                    position: relative;
                    left: 50%;
                    right: 50%;
                    margin-left: -50vw;
                    margin-right: -50vw;
                    margin-top: 4em;
                    text-align: center;
                    padding-top: .5em;
                    padding-bottom: 1em;
                }

                h2, p{
                    padding: .5em;
                }
                button {
                    padding: .2em 2em;
                    background: transparent;
                    border: 2px solid #ffffff;
                    border-radius: 4px;
                    font-size: 1.8em;
                    color: #ffffff;
                    cursor: pointer;
                }
                `}</style>
            </section>
        )
    }
}

export default Contact