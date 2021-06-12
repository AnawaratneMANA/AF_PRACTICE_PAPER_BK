const {parentPort, isMainThread, workerData} = require("worker_threads");
    //Calculation will be done here.
    parentPort.on('message', (data)=> {

        //data = data + " Changed a little bit";
        parentPort.postMessage(workerData.data.text+" Updated");
    });

