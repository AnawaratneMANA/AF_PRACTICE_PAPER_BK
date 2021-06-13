import http from "./http-common"

//Insert API call.
class LoadDataService {
    createLoad(loadData){
        return http.post("/load/create", loadData);
    }

    displayAllLoad () {
        return http.get("/load/display");
    }

    Calculation(object){

        return http.get("/load/calculation", object);
    }

}

export default new LoadDataService();
