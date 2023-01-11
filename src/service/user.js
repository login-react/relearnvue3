import request from "../service/request";
export function login(data) {
  console.log('data :>> ', data);
  return request({
    url: `/users/login`,
    method: "post",
    data,
  });
}

export function getUser() {
  return request({
    url: `/users/getUser`,
    method: "get",
  });
}
