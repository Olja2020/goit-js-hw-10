// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

//   promise
// 	.then(value => {
// 		// Promise fulfilled
// 	})
// 	.catch(error => {
// 	  // Promise rejected
// 	});

// +++++++++++++++++++++++++++++++++++++++++++++

// const form = document.querySelector('.form');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const delay = parseInt(this.elements['delay'].value);
//     const state = this.elements['state'].value;

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (state === 'fulfilled') {
//                 resolve(delay);
//             } else {
//                 reject(delay);
//             }
//         }, delay);
//     });

//     promise
//         .then((delay) => {
//             iziToast.success({
//                 title: '✅ Fulfilled',
//                 message: `Fulfilled promise in ${delay}ms`,
//             });
//         })
//         .catch((delay) => {
//             iziToast.error({
//                 title: '❌ Rejected',
//                 message:`Rejected promise in ${delay}ms`,

//             });
//         });
// });

const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const delay = parseInt(this.elements['delay'].value);
  const state = this.elements['state'].value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Rejected promise in ${delay}ms`,
      });
    });
});

//const isSuccess = true;

// Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// Registering promise callbacks
// promise
//   .then(value => {
//     iziToast.show({
//         title: 'Fulfilled',
//         message: `✅ Fulfilled promise in ${delay}ms`
//     });
// })
//   .catch(error => {
//     iziToast.show({
//         title: 'Rejected',
//         message: `❌ Rejected promise in ${delay}ms`
//     })
//   });
// });
