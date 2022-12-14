function updateRemoteStudents (students) {
let newArr = [];

if (typeof students === 'undefined') {
    return newArr};

for (let i = 0; i < students.length; i++){
    let student = students[i];
    if ('location' in student === false) { 
        student.location = 'remote';
    };
    newArr.push(student);
    };
return newArr;
}

module.exports = (updateRemoteStudents);