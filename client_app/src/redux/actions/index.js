export const addNote = (data) => {
    return {
        type    : 'ADD_NOTE',
        payload : data
    }
}

export const updateNote = (data) => {
    return {
        type    : 'UPDATE_NOTE',
        payload : data
    }
}

export const removeNote = (data) => {
    return {
        type    : 'REMOVE_NOTE',
        payload : data
    }
}


