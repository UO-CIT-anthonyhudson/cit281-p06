class CustomError extends Error {}

function throwGenericError() {
    throw new Error("Generic Error")
}

function throwCustomError() {
    throw new CustomError("Custom Error")
}

console.log("Force Generic Error");
try {
    console.log("Generic Error try block")
    throwGenericError();
} catch (error) {
    console.log("Generic Error Catch block")
    console.log(`${error.name}: ${error.message}`)
} finally {
    console.log("Generic Error finally block")
}

console.log("Force custom error");
try {
    throwCustomError();
} catch (error) {
    console.log("Custom Error Catch block")
    console.log(`${error.name}: ${error.message}`)
} finally {
    console.log("Custom Error finally block")
}
