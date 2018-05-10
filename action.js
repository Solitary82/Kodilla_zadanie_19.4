import uuid from 'uuid';
import { createStore } from 'redux';
import app from './reducers.js';
const store = createStore(app);

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

const boundAddComment = text => store.dispatch(addComment(text));

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}
    
const boundEditComment = (text, id) => store.dispatch(editComment(text, id));
    
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    };
}

const boundRemoveComment = (id) => store.dispatch(removeComment(id));

function thumbUpComment(id, votes) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: ++votes
    };
}

const boundThumbUpComment = (id, votes) => store.dispatch(thumbUpComment(id, votes));

function thumbDownComment(id, votes) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: --votes
    };
}

const boundThumbDownWComment = (id, votes) => store.dispatch(thumbDownComment(id, votes));

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';