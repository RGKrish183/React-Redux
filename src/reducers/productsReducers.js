const initial = {
    cart : 'initial'
}
export default (state = initial, payload) => {
    // console.log("reducers receive payloads ", payload);
    switch (payload.type) {
        case 'add':
            return {...state, cart:payload.item};
        default:
            return state;
    }
};