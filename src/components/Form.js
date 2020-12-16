import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          ref={register({ required: true })}
        />
        {errors.firstName && <p className="error">Field cannot be empty</p>}
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          ref={register({ required: true })}
        />
        {errors.lastName && <p className="error">Field cannot be empty</p>}
      </div>
      <div className="form-group">
        <input
          name="email"
          placeholder="Email Address"
          ref={register({ required: true })}
        />
        {errors.email && <p className="error">Invalid e-mail address</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && (
          <p className="error">Password must contain at least 8 characters</p>
        )}
      </div>
      <button type="submit">CLAIM YOUR FREE TRIAL</button>
      <p>
        By clicking the button, you are agreeing to our{' '}
        <span>Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
