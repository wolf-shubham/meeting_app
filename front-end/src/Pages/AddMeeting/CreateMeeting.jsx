import { Button, TextField } from '@material-ui/core'
import React from 'react'

function CreateMeeting() {
    return (
        <>
            <div>Create Meeting</div>
            <form className='' noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Title"
                    label="Title"
                    name="Title"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="Description"
                    label="Meeting Description"
                    name="Description"
                />
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
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
            </form>
        </>
    )
}

export default CreateMeeting