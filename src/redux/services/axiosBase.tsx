
import axios from 'axios';


export default () => {
  const headers = {};
  console.log(global.AUTH_TOKEN)
  if (global.AUTH_TOKEN) {
    headers['authorization'] = `Bearer ${global.AUTH_TOKEN}`;
  }

  return  axios.create({
    baseURL: 'http://sapi.fillsoftware.com/socialapp',
    headers
  });

  // apiAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

 
};

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 
// }



// export default axios.create({
//     baseURL: 'http://sapi.fillsoftware.com/socialapp',
//     // timeout: 1000,
//     headers: headers
//   });


//   export default () => {
    
    // apiAxios.defaults.headers.post['Content-Type'] ='application/json';
  

//   };




