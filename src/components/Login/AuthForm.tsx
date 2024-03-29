import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators";
import {AuthType} from "../../types";
const maxLength100 = maxLength(100);
const Form : React.FC<InjectedFormProps<AuthType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <Field type="email" validate={[required, maxLength100]} className="form-control" name='email' component='input'/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <Field type="password" className="form-control" validate={[required]} name='password' component='input'/>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <Field className="form-check-input" type="checkbox" name='rememberMe' component='input'/>
            <label className="form-check-label" htmlFor="gridCheck1">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  )
}

export default reduxForm<AuthType>({
  form: 'login'
})(Form);