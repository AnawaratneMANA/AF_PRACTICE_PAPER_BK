const {parentPort, isMainThread, workerData} = require("worker_threads");
    //Calculation will be done here.
    function calculationTripSum(){
        let total;
        total = (workerData.data.charge * workerData.data.duration) * workerData.data.numVehicles;
        return total;
    }
    parentPort.on('message', (data)=> {
        //data = data + " Changed a little bit";
        const total = calculationTripSum();
        parentPort.postMessage(total);
    });

