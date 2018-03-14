function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{
          user: action.author,
          text: action.comment
        }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      
      break;
  
    default:
      return state;
      break;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite this post whit a new one
      [action.postId]: postComments(state[action.postId],action) 
    }
  }
  return state;
}


export default comments;
