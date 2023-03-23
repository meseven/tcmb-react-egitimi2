import { useFormik } from 'formik';
import validations from './validations';

function SignupForm() {
  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (values.email === 'test@test.com') {
        return bag.setFieldError('email', 'Bu mail adresi zaten kullanımda.');
      }

      console.log(values);

      bag.resetForm();
    },
    validationSchema: validations,
  });

  return (
    <form className='signup' onSubmit={handleSubmit}>
      <div>
        <input
          placeholder='Fullname'
          value={values.name}
          name='name'
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.name && touched.name && (
          <div className='error'>{errors.name}</div>
        )}
      </div>
      <div>
        <input
          placeholder='E-mail'
          value={values.email}
          name='email'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className='error'>{errors.email}</div>
        )}
      </div>
      <div>
        <input
          placeholder='Password'
          type='password'
          value={values.password}
          name='password'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className='error'>{errors.password}</div>
        )}
      </div>
      <div>
        <input
          placeholder='Password confirm'
          type='password'
          value={values.passwordConfirm}
          name='passwordConfirm'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className='error'>{errors.passwordConfirm}</div>
        )}
      </div>

      <div>
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
