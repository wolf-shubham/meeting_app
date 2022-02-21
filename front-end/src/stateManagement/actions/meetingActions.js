import axios from 'axios'
import { CREATE_MEETING_FAIL, CREATE_MEETING_REQUEST, CREATE_MEETING_SUCCESS, GET_MEETING_FAIL, GET_MEETING_REQUEST, GET_MEETING_SUCCESS, UPDATE_MEETING_FAIL, UPDATE_MEETING_REQUEST, UPDATE_MEETING_SUCCESS } from "../constants/meetingConstant"

export const getMeetings = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_MEETING_REQUEST })
        const {
            userLogin: { userInfo }
        } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        const { data } = await axios.get('/meeting/', config)
        dispatch({
            type: GET_MEETING_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message = error
        dispatch({ type: GET_MEETING_FAIL, payload: message })

    }
}

export const createMeetingActions = (title, description, category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_MEETING_REQUEST
        })
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post('/meeting/addmeeting',
            { title, description, category }, config)

        dispatch({
            type: CREATE_MEETING_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_MEETING_FAIL
        })
    }
}


export const updateMeetingActions = (id, title, description, category) => async (dispatch, getState) => {
    try {
        dispatch({
            type: UPDATE_MEETING_REQUEST
        })
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/meeting/${id}`,
            { title, description, category }, config)

        dispatch({
            type: UPDATE_MEETING_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_MEETING_FAIL
        })
    }
}