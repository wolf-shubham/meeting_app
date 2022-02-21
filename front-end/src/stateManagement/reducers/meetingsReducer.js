import { CREATE_MEETING_FAIL, CREATE_MEETING_REQUEST, CREATE_MEETING_SUCCESS, GET_MEETING_FAIL, GET_MEETING_REQUEST, GET_MEETING_SUCCESS, UPDATE_MEETING_REQUEST, UPDATE_MEETING_SUCCESS, UPDATE_MEETING_FAIL, DELETE_MEETING_REQUEST, DELETE_MEETING_SUCCESS, DELETE_MEETING_FAIL } from "../constants/meetingConstant"

export const meetingReducer = (state = { meetings: [] }, action) => {
    switch (action.type) {
        case GET_MEETING_REQUEST:
            return { loading: true }
        case GET_MEETING_SUCCESS:
            return { loading: false, meetings: action.payload }
        case GET_MEETING_FAIL:
            return { loading: false }


        default:
            return state
    }
}

export const createMeetingReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MEETING_REQUEST:
            return { loading: true }
        case CREATE_MEETING_SUCCESS:
            return { loading: false, success: true }
        case CREATE_MEETING_FAIL:
            return { loading: false }


        default:
            return state
    }
}

export const updateMeetingreducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_MEETING_REQUEST:
            return { loading: true }
        case UPDATE_MEETING_SUCCESS:
            return { loading: false, success: true }
        case UPDATE_MEETING_FAIL:
            return { loading: false, success: false }
        default:
            return state
    }
}

export const deleteMeetingreducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_MEETING_REQUEST:
            return { loading: true }
        case DELETE_MEETING_SUCCESS:
            return { loading: false, success: true }
        case DELETE_MEETING_FAIL:
            return { loading: false, success: false }
        default:
            return state
    }
}