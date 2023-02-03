const friends = []

export function manageFriends(state = {friends}, action) {
  // your code here

  switch (action.type) {
    case "friends/add":
      state.friends.push(action.payload)
      return { friends: state.friends }
    case "friends/remove":
      return { friends: state.friends.filter((friend) => friend.id !== action.payload)}
    default:
        return state
  }
}
