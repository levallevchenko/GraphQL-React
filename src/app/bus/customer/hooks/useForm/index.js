import { useState } from 'react';

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = (evt) => {
    evt.persist();
    setForm((prevValues) => ({
      ...prevValues,
      [evt.target.name]: evt.target.value,
    }));
  };

  return {
    handleChange,
    form
  }
};
