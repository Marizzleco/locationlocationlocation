


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
      const testUpdate = updateRemoteStudents([{name: "Ali"}]);
      //act
      let result = testUpdate;
      //assert
      expect(result).toEqual([{name: "Ali"}]);
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
    test("checks if location is present returns true", () => {
      //arrange
      const testLocation = updateRemoteStudents([{name: 'Ali',location: 'Manchester'}]);
      //act
      let result = testLocation;
      //assert
      expect(result).toBe(true);
    })
    // test("returns an array with updated student location property", () => {
    //   //arrange
    //   const testLocation = updateRemoteStudents([{name: 'Ali',}]);
    //   //act
    //   let result = testLocation;
    //   //assert
    //   expect(result).toEqual([{ name: 'Ali', location: 'remote'}]);
    // })


})
//returns a new array
//does not change original input