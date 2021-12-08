//-------------------------------------------

// function getPromise(delay, message) {
//     return Promise.resolve(message)
// }

	
// getPromise(2000, "hello").then(function(data) {
//     console.log(data);
// });

//-------------------------------------------

// function add(x, y) {
//     return new Promise((res, rej) => {
//         let sum=0;
//         if(typeof x === 'number' && typeof y === 'number') {
//           sum = x + y;
//           res(sum)
//         } else {
//           rej('Error!') 
            
//         }
//     })
//   }

  	
// add(2,2).then(res => console.log(res));

//-------------------------------------------

// const {getUser, getUserProfile} = require('./Helper.js');

// const getAge = async () => {
//     const user = await getUser()
//     const userProfile = await getUserProfile(user.id)
    
//     return userProfile.age
// }

// getAge().then(a => console.log(a));

//-------------------------------------------

// function* take(n, iterable) {
//     for(let i = 0; i<n; i++) {
//         yield iterable[i];
//     }
// }

// const arr = ['a', 'b', 'c', 'd'];