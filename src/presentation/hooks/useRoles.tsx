import { useMutation, useQuery } from "@tanstack/react-query";
import { createRoleAction } from "../../core/actions/statistics/roles/create-role.action";
import { RoleModel } from "../../core/models/role.models";
import { useNavigate } from "react-router";
import { useCallback, useState } from "react";
import { getPAginationRoleAction } from "../../core/actions/statistics/roles/get-pagination-role.action";
import { getOneRoleAction } from "../../core/actions/statistics/roles/get-one-role.action";
import { editRoleAction } from "../../core/actions/statistics/roles/edit-role.action";
import { deleteRoleAction } from "../../core/actions/statistics/roles/delete-role.action";

export const useRoles = (roleId?: string) => {

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const rolePaginationQuery = useQuery({
    queryKey: ["roles", page, pageSize, searchTerm], // Unique key 
    queryFn: () => getPAginationRoleAction(page, pageSize, searchTerm),
    staleTime: 1000 * 60 * 5, // 5M
    refetchOnWindowFocus: false,
  });

  const oneRoleQuery = useQuery({
    queryKey: ["role", roleId],
    queryFn: () => getOneRoleAction(roleId!),
    enabled: !!roleId,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const createRoleMutation = useMutation({
    mutationFn: (role: RoleModel) => createRoleAction(role),
    onSuccess: (data) => {
      if (data.status) {
        navigate("/roles");
      }
    },
    onError: (data) => {
      console.log(data);
    }
  });


  const editRoleMutation = useMutation({
    mutationFn: (role: RoleModel) => editRoleAction(role, roleId!),
    onSuccess: (data) => {
      if (data.status) {
        refreshRoles();
        navigate("/roles");
      }
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const deleteRoleMutation = useMutation({
    mutationFn: () => deleteRoleAction(roleId!),
    onSuccess: (data) => {
      if (data.status) {
        refreshRoles();
        navigate("/roles");
      }
    },
    onError: (data) => {
      console.log(data);
    },
  });

  const refetch = rolePaginationQuery.refetch;

  const refreshRoles = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    // Properties
    page,
    pageSize,
    searchTerm,
    rolePaginationQuery,
    oneRoleQuery,
    createRoleMutation,
    editRoleMutation,
    deleteRoleMutation,

    // Methods
    setPage,
    setPageSize,
    setSearchTerm,
    refreshRoles
  }

}