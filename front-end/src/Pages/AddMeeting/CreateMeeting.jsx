import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createMeetingActions } from '../../stateManagement/actions/meetingActions'
import './CreateMeeting.css'

function CreateMeeting() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()


    const createMeeting = useSelector((state) => state.createMeeting)
    const { loading, meeting, error } = createMeeting

    const resetHandler = () => {
        setTitle('')
        setDescription('')
        setCategory('')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createMeetingActions(title, description, category, date, time))
        // console.log(date.toString(), time)
        resetHandler()
        history.push('/home')
    }

    useEffect(() => {

    }, [meeting])

    return (
        <>
            <div className='createTitle'>Create Meeting</div>
            <form className='createForm' onSubmit={submitHandler} noValidate>
                <div className="formContainer">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        style={{ width: '80%', margin: '10px 10%' }}
                        id="title"
                        label="Title"
                        name="Title"
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
                        onChange={(e) => setDescription(e.target.value)}

                    />
                    {/* <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="category"
                    label="Category"
                    name="Category"
                    onChange={(e) => setCategory(e.target.value)}

                /> */}
                    <h3 className='priorityTitle'>Priority :
                        <span className='radioPriority'>
                            <input type="radio" id="low" name="fav_language" value="low" onChange={(e) => setCategory(e.target.value)} />
                            <label >Low</label>
                            <input type="radio" id="high" name="fav_language" value="high" onChange={(e) => setCategory(e.target.value)} />
                            <label >High</label>
                        </span>
                    </h3>
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
                    >Add Meeting
                    </Button>
                    <br />
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ width: '80%', marginLeft: '10%' }}

                        className
                        onClick={resetHandler}
                    >Reset Meeting
                    </Button>
                </div>

            </form>
        </>
    )
}

export default CreateMeeting