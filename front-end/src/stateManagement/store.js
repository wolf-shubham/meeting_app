import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { createMeetingReducer, meetingReducer, updateMeetingreducer } from './reducers/meetingsReducer'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userMeeting: meetingReducer,
    createMeeting: createMeetingReducer,
    updateMeeting: updateMeetingreducer

})

const userAlreadyLogin = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userAlreadyLogin },
    userRegister: { userInfo: userAlreadyLogin }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store