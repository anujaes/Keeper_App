const initialData = [ ]

const noteReducers = (state = initialData, action) => {

    switch(action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload]

        case 'REMOVE_NOTE':
            const temp = state.filter( (item) => item.createdAt !== action.payload);
            return [...temp];

        case 'UPDATE_NOTE':
            return state;

        default:
            return state;
    }
}

export default noteReducers;