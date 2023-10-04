export default function users(state=[],action){
    if(action.type==='add_user'){
        return action.users
    }
    return state;
}