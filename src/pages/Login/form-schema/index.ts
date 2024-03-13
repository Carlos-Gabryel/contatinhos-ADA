import * as Yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .nullable()
    .required('Digite seu e-mail'),
  password: Yup.string().nullable().required('Digite sua senha'),
});