import React from 'react';

class Timetable extends React.Component {
    render(){
        return (
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
        )
    }
}

export default Timetable
