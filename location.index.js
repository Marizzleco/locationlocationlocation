function updateRemoteStudents (students) {
let newArr = [];
if (typeof students === 'undefined') {
    return newArr}
for (let i = 0; i < students.length; i++){
    newArr.push(students[i]);
};

return newArr;
}

module.exports = (updateRemoteStudents);