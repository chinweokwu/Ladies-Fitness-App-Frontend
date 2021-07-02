import { setUser } from '../Users/actions';

function checkAuth (dispatch) {  
  const savedToken = localStorage.getItem('token')
  if (savedToken) {
    const token = JSON.parse(savedToken)
    const dateCreated = new Date(token.created)
    const created = Math.round(dateCreated.getTime() / 1000)
    const secs = 1209600
    const expires = created + secs

    if (created > expires) return false
    dispatch(setUser(token))
    return true
  }
  return false
}

export function Authorization ({ dispatch }) {  
  return (nextState, replace, next) => {
    if (checkAuth(dispatch)) {
      replace('workouts')
      return next()
    }
    if (nextState.location.pathname !== '/login') replace('login')
    return next()
  }
}

export function appAuthorization ({ dispatch, getState }) {  
  return (nextState, replace, next) => {
    const user = getState().user
    if (user && user.token) return next()
    if (checkAuth(dispatch)) return next()
    replace('login')
    return next()
  }
}
