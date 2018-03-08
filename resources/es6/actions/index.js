import axios from 'axios';

const nfl = 'http://nflarrest.com/api/v1/team/';

export function increment (){
  return {type: 'INCREMENT'};
}

export function decrement(){
  return {type: 'DECREMENT'};
}

export function asyncIncrement(){
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(increment());
    },1000)
  };
}

export function asyncDecrement(){
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(decrement());
    },1000);
  }
}

export function dataNfl(){
  return (dispatch)=> {
    const getNfl = axios.create({
     headers: {
       'X-Requested-With': 'XMLHttpRequest'
     }
    });
    getNfl.get(nfl)
      .then((result)=>{
        console.log(result)
        dispatch({
            type: 'LOAD_SUCCESS',
            payload: result
        })
      })
      .catch(error=>{
        console.error(error)
        dispatch({
          type: 'LOAD_FAILED',
          payload: error
        })
      })
  }
}


// {
//   increment: ()=>{
//     return {type: 'INCREMENT'};
//   },
//   decrement: ()=>{
//     return {type: 'DECREMENT'};
//   },
//   hello: ()=>{
//     return {type: 'HELLO'};
//   },
//   asyncIncrement: () => {
//     console.log(this);
//     const increment = this.increment;
//     return (dispatch) => {
//       setTimeout(()=>{
//         dispatch(increment());
//       },1000)
//     };
//   },
//   asyncDecrement: ()=>{
//     const decrement = this.decrement;
//     return (dispatch) => {
//       setTimeout(()=>{
//         dispatch(decrement());
//       },1000);
//     }
//   }
// }