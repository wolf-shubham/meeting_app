import { Button, Card } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import meetings from '../../data/data.js'

function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <Link to='addmeeting'>
                <Button>Add Meeting</Button>
            </Link>
            {
                meetings.map(meeting => (
                    <Card>
                        <span>
                            <h1>{meeting.title}</h1>
                        </span>
                        <h3>{meeting.desc}</h3>
                        <h4>Created At :{meeting.date}</h4>
                        <div>
                            <Button href={`/meeting/${meeting._id}`}>Edit</Button>
                            <Button variant='danger'>Delete</Button>
                        </div>
                    </Card>
                ))
            }

        </>
    )
}

export default Home