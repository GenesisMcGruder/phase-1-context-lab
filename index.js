/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(employee){
    return{
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

function createEmployeeRecords(employees){
    return employees.map(createEmployeeRecord)
}

function createTimeInEvent(timeIn){
    let [date,hour] = timeIn.split(" ")
    let timeObj ={
        type: 'TimeIn',
        hour: parseInt(hour,10),
        date
    }
    this.timeInEvents.push(timeObj);
    return this;
}

function createTimeOutEvent(timeOut){
    let [date,hour] = timeOut.split(" ")
    let timeObj2 = {
        type: "TimeOut",
        hour: parseInt(hour,10),
        date
    }
    this.timeOutEvents.push(timeObj2);
    return this;
}

function hoursWorkedOnDate(date){
    const startTime = this.timeInEvents.find(event => event.date ===date)
    const endTime = this.timeOutEvents.find(event => event.date ===date)
    const timeIn = startTime.hour
    const timeOut = endTime.hour
    return (timeOut/100) - (timeIn/100);
}
function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this,date)
    return this.payPerHour*hours
}

function findEmployeeByFirstName(employees, firstNameStr){
    return employees.find(employee => employee.firstName === firstNameStr)
}

function calculatePayroll(employeeRecords){
    const record = employeeRecords.map(employee => allWagesFor.call(employee))
    return record.reduce((currentValue, total) => currentValue + total)
}