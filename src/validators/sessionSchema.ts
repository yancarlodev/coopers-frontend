import * as yup from 'yup'

export interface ILoginData {
    email: string,
    password: string
}

export interface IRegisterData extends ILoginData {
    confirmPassword?: string
}

export const loginSchema: yup.SchemaOf<ILoginData> = yup.object().shape({
    email: yup.string().required('email is required!'),
    password: yup.string().required('Password is required!')
})

export const registerSchema: yup.SchemaOf<IRegisterData> = yup.object().shape({
    email: yup.string().min(3, 'Should have at least 3 digits!').required('email is required!'),
    password: yup.string().min(8, 'Should have at least 8 digits!').matches(/^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase and one number!').required('Password is required!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password must match!').required('Confirm password is required!')
})