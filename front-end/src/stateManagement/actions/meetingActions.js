import axios from 'axios'
import { GET_MEETING_FAIL, GET_MEETING_REQUEST, GET_MEETING_SUCCESS } from "../constants/meetingConstant"

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