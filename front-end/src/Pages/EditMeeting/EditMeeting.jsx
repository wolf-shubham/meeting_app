import { Button, CircularProgress, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMeetingActions } from '../../stateManagement/actions/meetingActions'

function EditMeeting({ match, history }) {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const updateMeeting = useSelector((state) => state.updateMeeting)
    const { loading, meeting, error } = updateMeeting



    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`/meeting/${match.params.id}`)
            setTitle(data.title)
            setDescription(data.description)
            setCategory(data.category)
            // console.log(data)
        }
        fetching()
    }, [match.params.id])

    const resetHandler = () => {
        setTitle('')
        setDescription('')
        setCategory('')
    }

    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(updateMeetingActions(match.params.id, title, description, category))
        resetHandler()
        history.push('/')
    }


    return (
        <>
            <div>Create Meeting</div>
            {loading && <CircularProgress />}
            <form className='' onSubmit={updateHandler} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
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
                    fullWidth
                    id="description"
                    label="Meeting Description"
                    name="Description"
                    value={description}
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
                    value={category}
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
                >Update Meeting
                </Button>
                <br />
                <br />
                <Button
                    // stype="submit"
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



export default EditMeeting