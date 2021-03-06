const remoteURL = 'http://localhost:8088/'

export default {
    GetAll(str) {
        return fetch(`${remoteURL}${str}`)
        .then(response => response.json())
    },

    Post(str, obj){
        return fetch(`${remoteURL}${str}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    Get(str, id) {
        return fetch(`${remoteURL}${str}/${id}`)
        .then(response => response.json())
    },
    Delete(str, id) {
        return fetch(`${remoteURL}${str}/${id}`, {
            method: 'DELETE'
        }).then(response => response.json())
    },
    Update(str, editedObj) {
        return fetch(`${remoteURL}${str}/${editedObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedObj)
        }).then(data => data.json());
      },
    GetUsersRecipes(){
        return fetch(`${remoteURL}recipes?userId=${sessionStorage.activeUserID}`)
        .then(res=>res.json())
    },
    GetUserRecipesByUser(userId){
        return fetch(`${remoteURL}recipes?userId=${userId}`)
        .then(res=>res.json())
    },
    GetUsersFriends() {
        return fetch(`${remoteURL}friends?currentUserId=${sessionStorage.activeUserID}&_expand=user`)
        .then(response => response.json())
    },
    GetAllFriends(){
        return fetch(`${remoteURL}friends?_expand=user`)
        .then(res=>res.json())
    },

    GetNotesWithRecipes() {
        return fetch(`${remoteURL}notes?recipeId=${sessionStorage.noteRecipeId}&_expand=recipe`)
        .then(res => res.json())
    }

}