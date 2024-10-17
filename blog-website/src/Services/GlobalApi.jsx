import axios from "axios";

const GlobalApi = {
    getPost: () => {
        return axios.get('http://localhost:8000/data'); // Example using axios
    },
    getPostById: (id) => { // Add id as a parameter
        return axios.get(`http://localhost:8000/data/${id}?populate=*`); // Use template literals
    }
};

export default GlobalApi;
