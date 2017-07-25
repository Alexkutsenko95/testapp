export function getCategories(state) {
    return Object.values(state.categories.byId);}

export function getCategory(state, id) {
    return state.categories.byId[id];
}

export function getParams(state) {
    return state.categories.params;
}

