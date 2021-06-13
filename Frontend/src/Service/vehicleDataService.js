import http from "./http-common"

//Insert API call.
class VehicleDataService {
    createVehicle(vehicleData){
        return http.post("/vehicle/create", vehicleData);
    }

    displayAllVehicles () {
        return http.get("/vehicle/display");
    }

    deleteVehicle(vehicleData){
        console.log(vehicleData)
        return http.delete("/vehicle/delete/" + vehicleData);
    }
}

export default new VehicleDataService();
