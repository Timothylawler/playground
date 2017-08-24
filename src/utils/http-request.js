function getAccessToken(){
  return "TOKEN";
}

export function GET(url){
  let init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "GET",
  }
  return fetch(url, init);
}

export function GET_AUTHORIZED(url){
  let init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken()}`
    },
    method: "GET",
  }
  return fetch(url, init);
}

export function POST(url, data){
  let init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(data)
  }
  return fetch(url, init);
}

export function POST_AUTHORIZED(url, data){
  let init = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken()}`
    },
    method: "POST",
    body: JSON.stringify(data)
  }
  return fetch(url, init);
}

export function PUT(url, data){

}

export function DELETE(url, data){

}