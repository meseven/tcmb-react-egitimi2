import { object, ref, string } from 'yup';

const messages = {
  required: 'Bu alan zorunludur.',
  email: 'Geçerli bir mail adresi belirtin.',
};

const validations = object({
  name: string().required(messages.required),
  email: string().email(messages.email).required(messages.required),
  password: string()
    .min(6, 'En az 6 karakter giriniz.')
    .required(messages.required),
  passwordConfirm: string()
    .oneOf([ref('password')], 'Parolalar eşleşmiyor')
    .required(messages.required),
});

export default validations;
