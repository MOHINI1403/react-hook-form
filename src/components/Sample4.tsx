


// validation function
const validatePassword = (value) => {
    if (value.length < 6) {
      return 'Password should be at-least 6 characters.';
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
    ) {
      return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
    }
    return true;
  };
  
  // JSX
  <input
    type="password"
    name="password"
    ref={register({
      required: 'Password is required.',
      validate: validatePassword
    })}
  />