
const updateRemoteStudents = require("../location.index");

describe("updateRemoteStudents", () => {
    test.only("returns an array", () => {
      //arrange
      const testLocation = updateRemoteStudents();
      //act
      let result = testLocation;
      //assert
      expect(result).toEqual([]);
    })
    test.only("pushes student onto the new array", () => {
      //arrange
      const testUpdate = updateRemoteStudents([{name: "Ali", location: "Manchester"}]);
      //act
      let result = testUpdate;
      //assert
      expect(result).toEqual([{name: "Ali", location: "Manchester"}]);
    })
    test("checks if location prop exists", () => {
      //arrange
      const testLocation = updateRemoteStudents([{name: 'Ali',}]);
      //act
      let result = testLocation;
      //assert
      expect(result).toBe(false);
    }
)

    test.only("returns an array with updated student location property", () => {
      //arrange
      const testLocation = updateRemoteStudents([
        { name: "Paul", location: "Manchester" },
        { name: 'Ali', }
      ]);
      //act
      let result = testLocation;
      //assert
      expect(result).toEqual([
        { name: "Paul", location: "Manchester" },
        { name: 'Ali', location: 'remote'}
      ]);
    })
    test.only("does not change original input", () => {
      //arrange
      const input =  [{ name: "Paul", location: "Manchester" },
      { name: 'Ali', }]
      const testUpdate = updateRemoteStudents([
      { name: "Paul", location: "Manchester" },
      { name: 'Ali', }]
      );
        //act
      let result = testUpdate;
      //assert
      expect(input).toEqual([ { name: "Paul", location: "Manchester" },
      { name: 'Ali', }]);
    })

})
//returns a new array
//does not change original input