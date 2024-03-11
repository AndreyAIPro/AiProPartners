import { useMutation, useQueryClient } from "@tanstack/react-query";

import { setUpdateUser } from "../utils/supabaseUtils";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();
  
  const { mutate: updateUser, isLoading: isUpdating  } = useMutation({
    mutationFn: setUpdateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { updateUser, isUpdating };
}