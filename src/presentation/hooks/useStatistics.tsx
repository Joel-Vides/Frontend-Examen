import { useQuery } from "@tanstack/react-query"
import { countsAction } from "../../core/actions/statistics/counts.action";

export const useStatistics = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['statistics/counts'], // Unique Key
        queryFn: countsAction, // Function to Fetch Data
        staleTime: 1000 * 60 * 60 * 24, // 24 Hours Caché
        refetchOnWindowFocus: false,
    });

    return {
        // Properties
        data,
        isLoading,
        error
        
        // Methods
    }
}