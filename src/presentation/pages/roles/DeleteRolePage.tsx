import { Link, useParams } from "react-router";
import { Title } from "../../components/shared/Title";
import { useRoles } from "../../hooks/useRoles";
import { Loader } from "lucide-react";

export const DeleteRolesPage = () => {

    const { roleId } = useParams();
    const { oneRoleQuery, deleteRoleMutation } = useRoles(roleId);

    if (oneRoleQuery.isLoading) {
        return <Loader />
    }

    return (
        <div className="w-full flex flex-col">
            <Title text="Borrar Rol" />

            {deleteRoleMutation.isError && (
                <div className="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <span>{deleteRoleMutation.error.message}</span>
                </div>
            )}

            <div className="mt-6 w-full text-center mb-4">
                <label className="block text-gray-700 text-sm font-bold mt-2">
                    ¿Desea Borrar el Rol: {oneRoleQuery.data?.data.name}?
                </label>
            </div>

            <div className="flex items-center content-center justify-center gap-2">
                <button
                    onClick={() => deleteRoleMutation.mutate()}
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                    Confirmar
                </button>

                <Link
                    to="/countries"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                    Regresar
                </Link>
            </div>

        </div>
    )
}