import React from 'react';
import { useForm } from 'react-hook-form';

function MyForm() {
  // Destructuring the form methods and state from the hook
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // Submit function that will be called when the form is submitted
  const onSubmit = (data) => {
    console.log(data);
    // Perform actions with form data, e.g., submit to a server
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Input field with validation */}
      <label>Username:</label>
      <input {...register('username', { required: 'Username is required' })} />
      {errors.username && <p>{errors.username.message}</p>}

      {/* Input field without validation */}
      <label>Email:</label>
      <input {...register('email')} />

      {/* Watching the value of a specific field */}
      <p>Email Value: {watch('email')}</p>

      {/* Submit button */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
