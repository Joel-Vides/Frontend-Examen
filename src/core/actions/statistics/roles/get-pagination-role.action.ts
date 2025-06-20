import { AxiosError } from "axios";
import { ApiErrorResponse } from "../../../../infrastructure/interfaces/api-error.response";
import { ApiResponse } from "../../../../infrastructure/interfaces/api.response";
import { PageResponse } from "../../../../infrastructure/interfaces/page.response";
import { RoleResponse } from "../../../../infrastructure/interfaces/role.response";
import { personsApi } from "../../../api/persons.api";

export const getPAginationRoleAction = async (page = 1, pageSize = 10, searchTerm = ""): Promise<ApiResponse<PageResponse<RoleResponse>>> => {
    try {

        const { data } = await personsApi.get<ApiResponse<PageResponse<RoleResponse>>>
        (`/roles`, {
            params: {
                page,
                pageSize,
                searchTerm
            }
        });

        return data;
    } catch (error) {
        const apiError = error as AxiosError<ApiErrorResponse>;

        console.error(apiError);

        if (apiError.response) {
            throw new Error(apiError.response.data.message);
        } else if (apiError.request) {
            throw new Error("Error de Condición");
        } else {
            throw new Error("Error Desconocido");
        }

    }
}