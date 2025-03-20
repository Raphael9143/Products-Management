import axiosClient from "./axiosClient";

const fetchAPI = {
    getData: () => {
        return axiosClient.get('api/products/management')
    }
}

export default fetchAPI