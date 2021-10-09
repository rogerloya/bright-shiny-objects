// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(first, last){
    const user = {
        firstName: first,
        lastName: last
    };
    return user;
}

function setAge(user, n){

    user['age'] = n
    return user;
}

function incrementAge(user){

    user['age'] = user['age'] + 1
    return user;
}

function fixCar(car){

    car['needsMaitenance'] = false
    return car;
}

function addGrades(student, newGrades){
    for (let i = 0; i < newGrades.length; i++) {
        student['grades'].push(newGrades[i])
    }
    
    return student;
}

function getDataType(car, input){
    return typeof car[input]
}

function addTodo(todos, newTodo){
    todos.push(newTodo)
    return todos;
}

function addSong(playlist, newSong){
    playlist['songs'].push(newSong)

    playlist['duration'] = playlist['duration'] + newSong['duration']
    return playlist
}

function updateReportCard(reportCard, newGrade) {
    reportCard['grades'].push(newGrade)
    reportCard['lowestGrade'] = Math.min.apply(Math, reportCard['grades'])

    reportCard['highestGrade'] = Math.max.apply(Math, reportCard['grades'])

    let sum = 0
    let d = reportCard['grades'].length
    let average = sum/d

    for (let i = 0; i < reportCard['grades'].length; i++) {
        sum += reportCard['grades'][i]
    }

    reportCard['averageGrade'] = sum/d

    return reportCard

}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
