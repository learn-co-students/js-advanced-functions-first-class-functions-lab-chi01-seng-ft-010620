// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
    return driverArray.slice(0, 2)
}

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyFare) {
    return function (fare) {
        return multiplyFare * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (driversArray, previousFunction) {
    return previousFunction(driversArray)
}
