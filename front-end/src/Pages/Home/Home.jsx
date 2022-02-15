import { Button, Card } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {

    const [meeting, setMeeting] = useState([])

    const fetchMeeting = async () => {
        const { data } = await axios.get('/meeting/getMeetings')
        setMeeting(data)
    }
    console.log(meeting)
    useEffect(() => {
        fetchMeeting()
    }, [])

    return (
        <>
            <h1>Home Page</h1>
            <Link to='addmeeting'>
                <Button>Add Meeting</Button>
            </Link>
            {
                meeting.map(meeting => (
                    <Card key={meeting._id}>
                        <span>
                            <h1>{meeting.title}</h1>
                        </span>
                        <h3>{meeting.desc}</h3>
                        <h4>Created At :{meeting.date}</h4>
                        <div>
                            <Button href={`/meeting/${meeting._id}`}>Edit</Button>
                            <Button >Delete</Button>
                        </div>
                    </Card>
                ))
            }

        </>
    )
}

export default Home