// async await
// defenition :- Use of async and await enables the use of ordinary try / catch blocks around asynchronous code. Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError .


// function otpVarify(otp) {
//     return new Promise((resolve, reject) => {
//         console.log('varifying otp...')
//         if (otp === 1234) {
//             resolve('Welcome to Our Website')
//         } else {
//             reject('otp is not vailid')
//         }
//     })
// }


// const otp = 12345
// const otpVarificationFunction = async () =>{
//     try {
//         const respose =  await otpVarify(otp)
//         console.log("OTP received");
//         const processrespose =  await processRequest(respose)
//         console.log(processrespose)
//     } catch (error) {
//         console.log(error)
//     }
 
// }

// otpVarificationFunction();