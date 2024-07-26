import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("El email es requerido").email("Email no válido"),
  password: string()
    .required("Contraseña es requerido")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "contraseña debe ser igual a la anterior")
    .required("Confirmar password es requerido"),
});

export const signinSchema = object().shape({
  email: string().required("El email es requerido").email("Email no válido"),
  password: string()
    .required("Contraseña es requerido")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});
