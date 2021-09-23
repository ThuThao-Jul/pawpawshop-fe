import axios from "axios";

const api= axios.create({
    baseURL: "https://pawpaw2021.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " + localStorage.getItem("accessToken")
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