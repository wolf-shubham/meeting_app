import { Button, Card, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMeetings } from '../../stateManagement/actions/meetingActions'

function Home() {

    const dispatch = useDispatch()

    const userMeeting = useSelector(state => state.userMeeting)
    const { userInfo } = userMeeting
    const { loading, meetings, error } = userMeeting

    const history = useHistory()

    console.log(meetings)
    useEffect(() => {
        dispatch(getMeetings())
        if (!userInfo) {
            history.push('/')
        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <h1>Home Page</h1>
            <Link to='/addmeeting'>
                <Button>Add Meeting</Button>
            </Link>
            {loading && <CircularProgress />}
            {
                meetings?.map(meeting => (
                    <Card key={meeting._id}>
                        <span>
                            <h1>{meeting.title}</h1>
                        </span>
                        <h3>{meeting.description}</h3>
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