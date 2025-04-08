function wait(ms) {
    const msg2 = "wait";
    console.log(msg2);             // logs: wait
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Waited ${ms} milliseconds`);
        }, ms);
    });
}

async function go() {
    const msg = await wait(2000);  // wait 2 sec
    console.log(msg);              // logs: Waited 2000 milliseconds

}

go();
