import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const fetchAllUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

export const useAllUsers = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: fetchAllUsers,
        staleTime: 1000 * 60, // 
    })

    return { data, error, isLoading }
}
