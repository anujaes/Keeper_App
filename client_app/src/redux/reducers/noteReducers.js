const initialData = [ ]

const noteReducers = (state = initialData, action) => {

    switch(action.type) {
        case 'ADD_NOTE':
            return [...state, action.data]
            return state;

        case 'REMOVE_NOTE':
            const idToRemove = action.data;
            const temp = state.filter((item) => item.id !== idToRemove);
            return [...temp];

        case 'UPDATE_NOTE':
            return state;

        default:
            return state;
    }
}

export default noteReducers;