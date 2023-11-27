
/*
const userLeft = false;
const watchingAdd = false;

// callBack Hell :- Multiple callbacks
function watchTutorial() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                satus: 'user has been left'
            })
        } else if (watchingAdd) {
            reject({
                satus: 'Watching add right now'
            })
        } else {
            resolve('Welcome...')
        }
    })
}
watchTutorial().then((msg) => console.log(msg)).catch((err) => console.log(err))
*/


// converting the callback into promise

const userLeft = false;
const watchingAdd = true;

function watchTutorial() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                satus: 'user has been left'
            })
        } else if (watchingAdd) {
            reject({
                satus: 'Watching add right now'
            })
        } else {
            resolve('Welcome...')
        }
    })
}
watchTutorial().then((msg) => console.log(msg)).catch((err) => console.log(err))
//{ satus: 'Watching add right now' }