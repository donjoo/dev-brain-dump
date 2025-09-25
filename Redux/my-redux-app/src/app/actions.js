import * as actions from "./actionsTypes";

export const bugAdded = descriptions => ({
    type: actions.BUG_ADDED,
    payload:{
        description: descriptions,
    }
}) 


export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
    payload:{
        id:id,
    }  
})



export const bugResolved =id => ({
    type: actions.BUG_RESOLVED,
    payload:{
        id:id,
    }
})



// export function bugAdded(descriptions){
    // return {
        // type: actions.BUG_ADDED,
        // payload:{
            // description: "Bug1"
        // }
    // }
// }
// 