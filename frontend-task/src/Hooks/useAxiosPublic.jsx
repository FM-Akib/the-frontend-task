import axios from "axios";


const axiosPublic = axios.create({
    baseURL:'https://frontend-task-beckend.vercel.app'
})
const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;