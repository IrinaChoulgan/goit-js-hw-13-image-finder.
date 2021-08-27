// import refs from "./refs.js"

// let currentPage = 1;
// const KEY_API = '23070790-299ad5e8dfdc75cc527267990';
// const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal'

// export function handlerSubmit(e){
//     e.preventDefault();
//     const value = refs.input.value;
    
//     fetch(`${BASE_URL}&q=${value}&page=${currentPage}&per_page=12&key=${KEY_API}`)
//     .then(response => response.json())
//     .then(photo =>
//       {
//       if (photo.hits.length === 0) {
//         return  error({
//           text: 'Incorrect data. Please enter your request again',
//           delay: 2000,
//         });
//       } else renderPhoto(photo.hits);
//       return  success({
//         text: 'Super, your picture collection has been found!',
//         delay: 2000,
//       });
//       })
//     .then(() => currentPage++)
//     .catch(err => {defaultModules.set(PNotifyMobile, {});
//     error({
//     text: '404 Not found'
//   });})
//   } 