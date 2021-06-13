const {parentPort, workerData} = require("worker_threads");
    //Calculation will be done here.
    function calculationTripSum(){
        let total;
        total = (workerData.data.kilometers * workerData.data.costPerKm) * workerData.data.noOfvehicles;
        return total;
    }
    parentPort.on('message', (data)=> {
        //data = data + " Changed a little bit";
        const total = calculationTripSum();
        parentPort.postMessage(total);//send to parent
        console.log(data);
    });

