import { useMutation } from "@tanstack/react-query";
import { createRoleAction } from "../../core/actions/statistics/roles/create-role.action";
import { RoleModel } from "../../core/models/role.models";
import { Navigate } from "react-router";

export const useRoles = (roleId?: string) => {

      const createCountryMutation = useMutation({
    mutationFn: (role: RoleModel) => createRoleAction(role),
    onSuccess: (data) => {
      if(data.status) {
        Navigate("/roles");
      }
    },
    onError: (data) => {
      console.log(data);
    }
  });


}