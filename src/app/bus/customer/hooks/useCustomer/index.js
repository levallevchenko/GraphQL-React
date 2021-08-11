// Core
import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader} from 'graphql.macro';

// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');


export const useCustomer = () => {
  const [addUser, { data }] = useMutation(mutationCreateAccount);
  const [values, setValues] =  useState({
    account: {
      name: '',
      username: '',
      password: ''
    }
  });

  const handleChange = (evt) => {
    evt.persist();
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [evt.target.name]: evt.target.value,
      }
    }))
  }

  const save = () => {
    const { account } = values; 
    addUser({
      variables: {
        account
      }
    })
  }

  return {
    handleChange,
    save,
    createdAccount: data && data.createAccount
  }

}
