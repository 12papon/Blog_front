import { useQuery } from "@tanstack/react-query";

export const UserProfileMenuUpdate = () => {
  return useQuery({
    queryKey: ["AuthUser"],
    queryFn: () => {
      const user = localStorage.getItem("blogUser");
      return user ? JSON.parse(user) : null;
    },
    initialData: () => {
      const user = localStorage.getItem("blogUser");
      return user ? JSON.parse(user) : null;
    },
    staleTime: Infinity, // ডাটা বারবার চেক করার দরকার নেই
  });
};
