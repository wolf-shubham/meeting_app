import { Button, CircularProgress, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMeetingActions } from '../../stateManagement/actions/meetingActions'
import './EditMeeting.css'

function EditMeeting({ match, history }) {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const updateMeeting = useSelector((state) => state.updateMeeting)
    const { loading, meeting, error } = updateMeeting



    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`/meeting/${match.params.id}`)
            setTitle(data.title)
            setDescription(data.description)
            setCategory(data.category)
            setDate(data.date)
            setTime(data.time)
            // console.log(data)
        }
        fetching()
    }, [match.params.id])

    const resetHandler = () => {
        setTitle('')
        setDescription('')
        setCategory('')
        setDate('')
        setTime('')
    }

    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(updateMeetingActions(match.params.id, title, description, category, date, time))
        resetHandler()
        history.push('/home')
    }


    return (
        <>
            <div className='createTitle'>Edit Meeting</div>
            {loading && <CircularProgress />}
            <form className='' onSubmit={updateHandler} noValidate>
                <div className="formContainer">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        style={{ width: '80%', margin: '10px 10%' }}
                        id="title"
                        label="Title"
                        name="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        style={{ width: '80%', margin: '10px 10%' }}
                        id="description"
                        label="Meeting Description"
                        name="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}

                    />

                    {/* <h3 className='priorityTitle'>Priority :
                        <span className='radioPriority'>
                            <input type="radio" id="low" name="fav_language" value="low" onChange={(e) => setCategory(e.target.value)} />
                            <label for="html">Low</label><br />
                            <input type="radio" id="high" name="fav_language" value="high" onChange={(e) => setCategory(e.target.value)} />
                            <label for="javascript">High</label><br />
                        </span>
                    </h3> */}
                    <span className='dateTime'>
                        <h3 className='dateTitle'>Date : </h3>
                        <input type="date" id="date" name="Date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                        <h3 className='dateTitle'>Time : </h3>
                        <input type="time" id="time" name="Time" value={time} onChange={(e) => setTime(e.target.value)}></input>
                    </span>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ width: '80%', margin: '10px 10%' }}
                        className
                    >Update Meeting
                    </Button>
                    <Button
                        // stype="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ width: '80%', margin: '10px 10%' }}
                        className
                        onClick={resetHandler}
                    >Reset Meeting
                    </Button>
                </div>
            </form>
        </>
    )
}



export default EditMeeting