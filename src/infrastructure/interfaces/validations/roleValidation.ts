import * as Yup from "yup";
import { RoleModel } from "../../../core/models/role.models";

export const roleInitialValues: RoleModel = {
    name: "",
    description: ""
};

export const roleValidationSchema: Yup.ObjectSchema<RoleModel> =
    Yup.object({
        name: Yup.string()
            .required("El nombre es requerido.")
            .min(3, "El nombre debe tener al menos 3 caracteres.")
            .max(100, "El nombre debe tener menos de 100 caracteres."),
        description: Yup.string()
            .required("La Descripción es Requerida.")
            .min(3, "La Descripción del Rol NO Debe Tener menos de 3 Caracteres")
            .max(256, "La Descripción del Rol NO Debe Tener más de 256 Caracteres"),
    });