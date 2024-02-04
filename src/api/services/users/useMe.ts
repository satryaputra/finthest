import privateApi from "@/api/config/privateApi";
import { useQuery } from "@tanstack/react-query";

const ME_URL = "/users/me";
export const ME_QUERY = ["me"];

const useMe = () => {
  return useQuery({
    queryKey: ME_QUERY,
    queryFn: async () => {
      const response = await privateApi.get(ME_URL);
      return response.data;
    },
    enabled: false,
  });
};

export default useMe;
