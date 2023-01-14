import request from "../service/request";
export function login(data) {
  console.log("data :>> ", data);
  return request({
    url: `/users/login`,
    method: "post",
    data,
  });
}

export function getUser(data = "/Users/edy/Desktop/node文件夹/abc/test2.pptx") {
  return request({
    url: `/fs/isFile`,
    method: "post",
    data,
  });
}
