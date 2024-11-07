import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { data:tasksCategory=[],isPending:loading,refetch} = useQuery({
        queryKey: ['tasksCategory'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/api/taskCategory')
            return res.data;
        }
    })

    
    return [tasksCategory,refetch,loading]
};

export default useAllTasks;