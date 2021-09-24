import axios from "axios";

// const token = localStorage.getItem("adminToken") ? localStorage.getItem("adminToken") : localStorage.getItem('accessToken')
// console.log('token', token);
const api= axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " +  localStorage.getItem('accessToken')
    },
});


api.interceptors.request.use(
    (request) => {
        console.log("Starting request", request);
        return request;
    },
    function (error){
        console.log("Request error", error);
    }
);


api.interceptors.response.use(
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

export default api;