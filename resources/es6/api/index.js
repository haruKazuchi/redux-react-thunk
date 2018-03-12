import axios from 'axios';

export function asyncIncreApi(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({param: 1})
     }, 1000)
  });
}

export function asyncDecreApi(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({param: -1})
     }, 1000)
  });
}

export function dataNfl(){
  const nfl = 'http://nflarrest.com/api/v1/team/';
  const getNfl = axios.create({
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  });
  return new Promise((resolve, reject) =>
  getNfl.get(nfl)
    .then(res => resolve(res))
    .catch(err => {
      console.log(err);
      reject(err)
    })
  )
};