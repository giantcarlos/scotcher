const initialState = {
    entities: [], 
    status: "idle",
};

function bottlesReducer (state = initialState, action) {
    switch (action.type) {
        case "bottles/bottleAdded":
            return {
                ...state,
                entities: [...state.entities, action.payload],
            }
        case "bottles/bottleRemoved":
            return {
                ...state,
                entities: state.entities.filter((bottle) => bottle.id !== action.payload),
            }
        case "bottles/bottleUpdated":
            return {
                ...state,
                entities: state.entities.map((bottle) =>
                    bottle.id === action.payload.id ? action.payload : bottle
                ),
            }
}}

export default bottlesReducer;