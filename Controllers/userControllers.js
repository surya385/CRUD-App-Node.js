import * as service from "../Service/userServices.js";

export const listUserController = (req) => {
  return new Promise((resolve, reject) => {
    try {
      service.listUserService(req).then(resolve).catch(reject);
    } catch (e) {
      console.log("error", e);
      reject({ error: true, statusCode: 500, message: "internal error" });
    }
  });
};

export const createUserController = (req) => {
    return new Promise((resolve, reject) => {
      try {
        service.createUserService(req).then(resolve).catch(reject);
      } catch (e) {
        console.log("error", e);
        reject({ error: true, statusCode: 500, message: "internal error" });
      }
    });
};
  
export const getUserController = (req) => {
    return new Promise((resolve, reject) => {
      try {
        service.getUserService(req).then(resolve).catch(reject);
      } catch (e) {
        console.log("error", e);
        reject({ error: true, statusCode: 500, message: "internal error" });
      }
    });
};
  
export const deleteUserController = (req) => {
    return new Promise((resolve, reject) => {
      try {
        service.deleteUserService(req).then(resolve).catch(reject);
      } catch (e) {
        console.log("error", e);
        reject({ error: true, statusCode: 500, message: "internal error" });
      }
    });
};
  
export const updateUserController = (req) => {
    return new Promise((resolve, reject) => {
      try {
        service.updateUserService(req).then(resolve).catch(reject);
      } catch (e) {
        console.log("error", e);
        reject({ error: true, statusCode: 500, message: "internal error" });
      }
    });
  };