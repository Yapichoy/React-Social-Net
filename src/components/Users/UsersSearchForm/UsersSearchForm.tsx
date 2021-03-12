import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../../redux/usersReducer";

type UsersFormObjectType = {
    term : string
}
const usersSearchFormValidate = (values:UsersFormObjectType)=> {
    const errors = {};
    return errors;
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
const UsersSearchForm:React.FC<PropsType> = React.memo((props) => {
    const submit =(values: UsersFormObjectType, {setSubmitting}) => {
        props.onFilterChanged(values);
        setSubmitting(false);
    }
    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: 'null' }}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field
                            type="text"
                            name="term"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.term}
                        />
                        <Field as="select" name={"friend"} >
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default UsersSearchForm;