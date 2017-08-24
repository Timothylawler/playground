import { 
  GET,
  GET_AUTHORIZED,
  POST,
  POST_AUTHORIZED,
  PUT,
  DELETE
} from './';

let options = {
  baseUrl: "http://localhost:4000",
}


class ApiService {
  getData(){
    return new Promise((resolve, reject) => {
      GET(options.baseUrl).then(res => {
        resolve(res.json());
      }).catch(error => {
        console.log("error fetching data: ", error);
        reject(error);
      })
    });
  }

  postData(data){
    return new Promise((resolve, reject) => {
      POST(options.baseUrl, data).then(res => {
        resolve(res.json());
      }).catch(error => {
        console.log("error fetching data: ", error);
        reject(error);
      })
    })
  }
}

export {ApiService};