// Core
// import { useMutation } from '@apollo/react-hooks';
// import { loader} from 'graphql.macro';

// Hooks
import { useForm } from '../useForm';

export const useCustomerAuth = () => {
  const { form, handleChange } =  useForm({
    username: '',
    password: ''
  });

  const logIn = () => {
    console.log(form)
  }

  return {
    handleChange,
    logIn
  }

}
