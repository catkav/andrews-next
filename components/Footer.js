import React from 'react'

class Footer extends React.Component {
    render(){
        return (
        <div>
            <h5><a href='http://www.catkav.com' target='_blank'>Made by Cat</a></h5>
            <a href='https://www.facebook.com/St.AndrewsAthleticClub/' target='_blank'><img src='/official_facebook.png'/></a>
            <style jsx>
            {`
            background: #001F0E;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #ffffff;
            font-family: sans-serif;
            div{
                padding-left: 15px;
                padding-right: 15px;
                position: absolute;
                bottom: 0;
                width: calc(100% - 30px);
            }
            a{
                text-decoration: none;
            }
            img{
                width: 2em;
                height: 2em;
            }

            @media screen and (min-width: 600px){
                div{
                    padding-left: 45px;
                    padding-right: 45px;
                    width: calc(100% - 90px);
                }
            }
            `}
            </style>
        </div>
        )
    }
}

export default Footer