// {
//     type:'add_user'
// }
export const add_user = 'add_user'

export function addMovies(users){
    return{
        type:add_user,
        users
    }
}