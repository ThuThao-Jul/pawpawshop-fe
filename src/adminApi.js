import axios from "axios";

// const token = localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : localStorage.getItem('accessToken')
// console.log('token', token);
const adminApi= axios.create({
    baseURL: "https://pawpaw2021.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " +  localStorage.getItem('adminToken')
    },
});


adminApi.interceptors.request.use(
    (request) => {
        console.log("Starting request", request);
        return request;
    },
    function (error){
        console.log("Request error", error);
    }
);


adminApi.interceptors.response.use(
    (response) => {
        console.log("Response", response);
        return response;
    },
    function (error){
        error = error.response.data;
        console.log("Response error", error);
        return Promise.reject({message: error.split("\n")[0]});
    }
);

export default adminApi;