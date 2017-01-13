import { FETCH_SUCCESS, FETCH_DANGER, FETCH_START } from "../actions/fetch";
import { handleActions } from "redux-actions";

const fetch = handleActions({
    [FETCH_SUCCESS]: function (state, action) {

        console.log(action);

        return {
            message: action.payload.message
        }

    },
    [FETCH_DANGER]: function(state, action) {
        console.log(action);

        return {
            message: action.payload.message
        };
    },
    [FETCH_START]: function(state, action) {
        console.log(action);

        return {
            message: action.payload.message
        }
    }
}, {});

export default fetch;
