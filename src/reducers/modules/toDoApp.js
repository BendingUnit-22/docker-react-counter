

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';
const APPEND = 'APPEND';

export function append(value) {
    return {type: APPEND, value : value}
}


export function add() {
    return {type: ADD}
};


export function subtract() {
    return {type: SUBTRACT}
};

export function reset() {
    return {type: RESET}

}

const initialState = {
    count: 0
};


export default function reducer(state=initialState, payload) {
    switch (payload.type){
        case ADD:
            return Object.assign({}, state, {count: state.count+1});
        case SUBTRACT:
            return Object.assign({}, state, {count: state.count-1});
        case APPEND:
            return Object.assign({}, state, {count: state.count + payload.value});
        case RESET:
            return initialState;
        default:
            return state;
    }
}