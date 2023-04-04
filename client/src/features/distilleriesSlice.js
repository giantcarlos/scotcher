const initialState = {
    entities: [], 
    status: "idle",
};

function distilleriesReducer (state = initialState, action) {
    switch (action.type) {
        case "distilleries/distileryAdded":
            return {
                ...state,
                entities: [...state.entities, action.payload],
            }
}}

export default distilleriesReducer;