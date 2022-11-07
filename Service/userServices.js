import userModel from "../Models/UserModel.js";

export const listUserService = (req) => {
    const body=req.body
    return new Promise((resolve, reject) => {
        try {
            userModel.find({}).then ((res) => {
                if(res)
                resolve({ error: false, statusCode: 200, message: "data found", body: res })
            else {
            reject({ error: true, statusCode:400, message: "Bad request" });
            }
            }).catch((err) => {
                console.log("error", e);
                reject({ error: true, statusCode: 500, message: "No data found" });
            })
        }
        catch (e) {
            console.log("error", e);
            reject({ error: true, statusCode: 500, message: "internal error" });
        }
    })
}

export const createUserService = (req) => {
    const body = req.body
    return new Promise((resolve, reject) => {
        try {
            userModel.create(body).then((res) => {
                if(res)
                    resolve({ error: false, statusCode: 200, message: "user created successfully", body: res })
                else {
                reject({ error: true, statusCode:400, message: "Bad request" });
                }
            }).catch((err) => {
                console.log("error", err)
                reject({ error: true, statusCode:400, message: err });
            })
        }
        catch (e) {
            console.log("error", e);
            reject({ error: true, statusCode: 500, message: "internal error" });
        }
    })
}

export const getUserService = (req) => {
    const { userId } = req.params
    return new Promise((resolve, reject) => {
        try {
            userModel.findOne({ _id: userId }).then((res) => {
                if(res)
                    resolve({ error: false, statusCode: 200, message: "user find successfully", body: res })
                else {
                reject({ error: true, statusCode:200, message: "user Not Found" });
                }
            }).catch((err) => {
                console.log("error", err)
                reject({ error: true, statusCode:200, message: err });
            })
        }
        catch (e) {
            console.log("error", e);
            reject({ error: true, statusCode: 500, message: "internal error" });
        }
    })
}

export const deleteUserService = (req) => {
    const { userId } = req.params
    return new Promise((resolve, reject) => {
        try {
            userModel.deleteOne({ _id: userId }).then((res) => {
                if(res.deletedCount>0)
                    resolve({ error: false, statusCode: 200, message: "user deleted successfully", body: res })
                else {
                reject({ error: true, statusCode:200, message: "user Not Found" });
                }
            }).catch((err) => {
                console.log("error", err)
                reject({ error: true, statusCode:200, message: err });
            })
        }
        catch (e) {
            console.log("error", e);
            reject({ error: true, statusCode: 500, message: "internal error" });
        }
    })
}

export const updateUserService = (req) => {
    const { userId } = req.params
    const body = req.body;
    return new Promise((resolve, reject) => {
        try {
            userModel.updateOne({ _id: userId }, body).then((res) => {
                if(res.modifiedCount>0)
                    resolve({ error: false, statusCode: 200, message: "user updated successfully", body: res })
                else {
                reject({ error: true, statusCode:200, message: "user Not Found" });
                }
            }).catch((err) => {
                console.log("error", err)
                reject({ error: true, statusCode:200, message: err });
            })
        }
        catch (e) {
            console.log("error", e);
            reject({ error: true, statusCode: 500, message: "internal error" });
        }
    })
}