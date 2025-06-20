import * as Yup from "yup";
import { RoleModel } from "../../../core/models/role.models";

export const roleInitial: RoleModel = {
    id: "",
    name: ""
};

export const roleValidationSchema: Yup.ObjectSchema<RoleModel> =
    Yup.object({
        id: Yup.string()
            .required("El id es requerido.")
            .min(3, "El nombre debe tener al menos 3 caracteres.")
            .max(100, "El nombre debe tener menos de 100 caracteres."),
        name: Yup.string()
            .required("El Nombre es requerido.")
            .min(3, "El Nombre del Rol NO Debe Tener menos de 3 Caracteres")
            .max(256, "El Nombre del Rol NO Debe Tener más de 256 Caracteres"),
    });