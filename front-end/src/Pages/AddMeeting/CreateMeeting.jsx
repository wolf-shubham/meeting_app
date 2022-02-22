import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createMeetingActions } from '../../stateManagement/actions/meetingActions'

function CreateMeeting() {
    const history = useHistory()
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const createMeeting = useSelector((state) => state.createMeeting)
    const { loading, meeting, error } = createMeeting

    const resetHandler = () => {
        setTitle('')
        setDescription('')
        setCategory('')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createMeetingActions(title, description, category))
        resetHandler()
        history.push('/home')
    }


    return (
        <>
            <div>Create Meeting</div>
            <form className='' onSubmit={submitHandler} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Meeting Description"
                    name="Description"
                    onChange={(e) => setDescription(e.target.value)}

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="category"
                    label="Category"
                    name="Category"
                    onChange={(e) => setCategory(e.target.value)}

                />
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue=''
                    className=''
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className
                >Add Meeting
                </Button>
                <br />
                <br />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className
                    onClick={resetHandler}
                >Reset Meeting
                </Button>
            </form>
        </>
    )
}

export default CreateMeeting