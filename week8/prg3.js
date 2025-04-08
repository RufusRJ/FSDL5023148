function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Waited ${ms} milliseconds`);
        }, ms);
    });
}

async function go() {
    const msg2 = "wait"
    const msg = await wait(2000);
    console.log(msg);
}

go();