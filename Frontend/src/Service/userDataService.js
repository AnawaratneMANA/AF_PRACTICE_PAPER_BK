import http from "./http-common"

//Insert API call.
class UserDataService {
    createUser(userData){
        return http.post("/user/create", userData);
    }

    updateUser(userData){
        return http.put('/user/update', userData);
    }

    displayAllUsers () {
        return http.get("/user");
    }

    deleteUsers(userData){
        console.log(userData)
        return http.delete("/user/delete/" + userData);
    }
}

export default new UserDataService();
