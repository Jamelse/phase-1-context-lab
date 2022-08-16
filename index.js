/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createEmployeeRecord = (array) => {
    return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
      }
    }

const createEmployeeRecords = function (array){
    return array.map(record => createEmployeeRecord(record));
    }


const createTimeInEvent = function (dateStamp){
    const [date, hour] = dateStamp.split(' ')
    const newInRecord = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
      }
    this.timeInEvents.push(newInRecord)
    
    return this
}

const createTimeOutEvent = function (dateStamp){
    const [date, hour] = dateStamp.split(' ')
    const newOutRecord = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
      }
    this.timeOutEvents.push(newOutRecord)
    return this
}


const hoursWorkedOnDate = function (targetDate){
    const inE = this.timeInEvents.find(iEv => iEv.date === targetDate)
    const outE = this.timeOutEvents.find(oEv => oEv.date === targetDate)
    return (outE.hour - inE.hour) / 100;
}


const wagesEarnedOnDate = function (targetDate){
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function(array, name){
    return array.find(record => record.firstName === name)
 }


 const calculatePayroll = function(array){
    return array.reduce((value, record) => {
        return value + allWagesFor.call(record)
    }, 0)
 }