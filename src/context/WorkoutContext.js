import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUT':
            return {
              workout: action.payload
            }  
        case 'CEATE_WORKOUT': 
            return {
              workout : [action.payload, ...state.workout]  
            }
        case 'DELETE_WORKOUT':
            return {
                workout: state.workout.filter((w) => w._id !== action.payload._id)
            }
        default: 
        return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workout: []
    });
   

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
        { children }
        </WorkoutsContext.Provider>
    )
}