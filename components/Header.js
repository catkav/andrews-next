import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
    render() {
        return (
            <div>
                <Link href='/'>
                    <img src='/ACSSiteIcon.svg' alt='St. Andrews logo' />
                </Link>
                <h1>Ashbourne St. Andrews A.C.</h1>
                <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    background: #00AA4F;
                }
                img {
                    max-width: 48px;
                    padding: 15px;
                }
                h1 {
                    color: #ffffff;
                    font-size: 1.5em;
                }
                @media screen and (min-width:600px){
                    img {
                        max-width: 75px;
                    }
                    h1 {
                        font-size: 2em;
                    }
                }
                `}</style>
            </div>
        )
    }
}

export default Header