export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_DANGER = 'FETCH_DANGER';
export const FETCH_START = 'FETCH_START';

export function fetchSuccess() {
    return {
        type: FETCH_SUCCESS,
        payload: {
            message: FETCH_SUCCESS
        }
    };
}

export function fetchDanger() {
    return {
        type: FETCH_DANGER,
        payload: {
            message: FETCH_SUCCESS
        }
    };
}

export function fetchStart() {
    return {
        type: FETCH_START,
        payload: {
            message: FETCH_START
        }
    }
}