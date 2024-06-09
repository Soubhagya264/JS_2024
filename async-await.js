function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' }]
            )
        }, 10000);
    })
}

function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 3, name: 'Johnny' },
                { id: 4, name: 'Roy' }]
            )
        }, 5000);
    })
}
const data = getData();
// data.then((res) => (res.map((i) => console.log(i))))

async function handlepromise() {
    // it will at the end of the code
    const awaitresult = await getData();
    console.log(awaitresult, "await result");
    for (let i = 1; i < 11; i++) {
        console.log(i * 2);
    }
    const awaitResult2 = await getData1();
    console.log(awaitResult2, "await result 2");
    setTimeout(() => {
        console.log("Other statements...............")
        console.log("Other statements...............")
        console.log("Other statements...............")
    }, 15000)

}
handlepromise()