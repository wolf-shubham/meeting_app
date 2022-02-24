import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createMeetingActions } from '../../stateManagement/actions/meetingActions'

function CreateMeeting() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

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
        dispatch(createMeetingActions(title, description, category))
        resetHandler()
        history.push('/home')
    }

    useEffect(() => {

    }, [meeting])

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
                <input type="radio" id="low" name="fav_language" value="low" onChange={(e) => setCategory(e.target.value)} />
                <label for="html">HTML</label><br />
                <input type="radio" id="medium" name="fav_language" value="medium" onChange={(e) => setCategory(e.target.value)} />
                <label for="css">CSS</label><br />
                <input type="radio" id="high" name="fav_language" value="high" onChange={(e) => setCategory(e.target.value)} />
                <label for="javascript">JavaScript</label><br />
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