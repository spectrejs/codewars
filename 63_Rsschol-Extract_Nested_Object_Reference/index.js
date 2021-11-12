// return the nested property value if it exists,
// otherwise return undefined

const obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

Object.prototype.hash = function(string) {
    let arrString = string.split('.')
    let objectPath = arrString.reduce((obj,key)=>{
        return (obj || {}) [key]
    },this)

    return objectPath
}

//console.log(obj.hash('person.name'))
console.log(obj.hash('person.game.home'))

//TASK
//You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
//
// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };
//
// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

//TEST
//describe("Tests", () => {
//   it("test", () => {
// Test.expect(obj.hash('person.name') == 'joe');
// Test.expect(obj.hash('person.game.home') == undefined);
//   });
// });