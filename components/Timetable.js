import React from 'react';

class Timetable extends React.Component {
    render() {
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Age Group</th>
                            <th>Monday</th>
                            <th>Wednesday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8-18 years</td>
                            <td>7:00-8:00pm</td>
                            <td>7:00-8:00pm</td>
                        </tr>
                        <tr>
                            <td>Adults</td>
                            <td>8.15-9.15pm</td>
                            <td>8:15-9.15pm</td>
                        </tr>
                    </tbody>
                </table>
                <style jsx>{`
                        table {
                        border: 1px solid #00AA4F;
                        border-radius: 2px;
                        border-spacing: 0;
                        border-collapse: collapse;
                        width: 100%;
                        max-width: 50em;
                        margin: 2em auto;
                        }
                        thead {
                            background: #ACE1C5;
                            text-align: left;
                        }
                        td, th {
                            border: 1px solid #00AA4F;
                            padding: 1.5% 1%;
                        }
                `}</style>
            </React.Fragment>
        )
    }
}

export default Timetable
