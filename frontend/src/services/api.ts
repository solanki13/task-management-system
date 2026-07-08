import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(

    (response) => response,

    (error) => {

        if (error.response) {

            switch (error.response.status) {

                case 401:

                    toast.error("Session expired. Please login again.");

                    localStorage.removeItem("token");

                    window.location.href = "/";

                    break;

                case 403:

                    toast.error("You are not authorized.");

                    break;

                case 404:

                    toast.error("Resource not found.");

                    break;

                case 500:

                    toast.error("Internal Server Error.");

                    break;

                default:

                    toast.error(
                        error.response.data?.message ||
                        "Something went wrong."
                    );

            }

        } else {

            toast.error("Unable to connect to the server.");

        }

        return Promise.reject(error);
    }

);

export default api;