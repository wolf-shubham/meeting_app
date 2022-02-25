import { Button, Card, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMeetingActions, getMeetings } from '../../stateManagement/actions/meetingActions'
import './Home.css'


function Home() {

    const dispatch = useDispatch()

    const userMeeting = useSelector(state => state.userMeeting)
    const { userInfo } = userMeeting
    const { loading, meetings, error } = userMeeting

    const updateMeeting = useSelector((state) => state.updateMeeting)
    const { success } = updateMeeting

    const deleteMeeting = useSelector((state) => state.deleteMeeting)
    const { loading: loadingDelete, success: successDelete } = deleteMeeting
    const history = useHistory()

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure you want to DELETE ?")) {
            dispatch(deleteMeetingActions(id))
        }
    }

    // console.log(meetings)
    useEffect(() => {
        dispatch(getMeetings())
        if (!userInfo) {
            history.push('/home')
        }
    }, [dispatch, history, userInfo, success, successDelete])

    return (
        <>
            <h1 className='homeTitle'>your meetings...</h1>
            <Link to='/addmeeting' className='link'>
                <Button variant="contained" color="primary" style={{ margin: 'auto' }}>Add Meeting</Button>
            </Link>
            <div className="circleLoading">
                {loading && <CircularProgress />}
            </div>
            <div className="meetingContainer">
                {
                    meetings?.map(meeting => (
                        <div className="singleMeeting" key={meeting._id}>
                            <Card >
                                <div className="cardContainer">
                                    <div className="meetingDetails">
                                        <h1 className='meetingTitle'>{meeting.title}</h1>
                                        <span>
                                            {
                                                meeting.category === 'low'
                                                    ? <button className='buttonLow'>{meeting.category}</button>
                                                    : <button className='buttonHigh'>{meeting.category}</button>

                                            }
                                        </span>
                                        <h2 className='meetingTitle'>{meeting.description}</h2>
                                        <h4 className='meetingTitle'>Deadline Date : {meeting.date} , {meeting.time}</h4>
                                    </div>

                                    <div className="meetingEditDelete">
                                        <a href={`/meeting/${meeting._id}`} ><span className="material-icons editIcon" style={{ fontSize: '30px', marginRight: '10px' }}>
                                            edit
                                        </span></a>
                                        <span className="material-icons" style={{ fontSize: '30px' }}
                                            onClick={() => deleteHandler(meeting._id)}>
                                            delete
                                        </span>
                                    </div>

                                </div>
                                {/* <div>
                                    <Button href={`/meeting/${meeting._id}`}>Edit</Button>
                                    <Button onClick={() => deleteHandler(meeting._id)}>Delete</Button>
                                </div> */}
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home