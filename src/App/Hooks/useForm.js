import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    callback();
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  };

  const reset = () => {
    setValues({});
  }

  return { values, handleChange, handleSubmit, reset };
}

export default useForm;
