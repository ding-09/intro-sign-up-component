import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        ref={register}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        ref={register}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        ref={register}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
      />
      <button type="submit">CLAIM YOUR FREE TRIAL</button>
      <p>
        By clicking the button, you are agreeing to our{' '}
        <span>Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
