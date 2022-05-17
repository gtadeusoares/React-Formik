import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      alert("Login successful");

    },
    validate: values => {
      let errors = {};
      if (!values.emailField) errors.emailError = 'Field Required';
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/.test(values.emailField)) errors.emailError = 'Username should be an email';
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/.test(values.emailField)
        && !values.emailField) errors.emailError = 'Field Required. Username should be an email.';
      if (!values.pswField) errors.pswError = 'Field Required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input id='emailField' name='emailField' type='email' 
          onChange={formik.handleChange} value={formik.values.emailField}
        />
        {
          formik.errors.emailError ? 
          <div id="emailError" style={{color: 'red'}}>
            {formik.errors.emailError}
          </div> 
          : null
        }
        <div>Password</div>
        <input id='pswField' name='pswField' type='text' 
          onChange={formik.handleChange} value={formik.values.pswField}
        />
        {
          formik.errors.pswError ? 
          <div id="pswError" style={{color: 'red'}}>
            {formik.errors.pswError}
          </div> 
          : null
        }
        {/* <br /> */}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
