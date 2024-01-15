import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function MyForm(){
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Perform actions with form data, e.g., submit to a server
  };

  const validatePassword = (value) => {
    // Custom validation logic for the password field
    // For example, requiring a minimum of 8 characters
    return value.length >= 8 || 'Password must be at least 8 characters';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Username field with required validation */}
      <label>Username:</label>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            placeholder="Enter your username"
          />
        )}
      />
      {errors.username && <p>{errors.username.message}</p>}

      {/* Password field with custom validation */}
      <label>Password:</label>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="password"
            placeholder="Enter your password"
          />
        )}
        rules={{ validate: validatePassword }}
      />
      {errors.password && <p>{errors.password.message}}

      {/* Submit button */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
