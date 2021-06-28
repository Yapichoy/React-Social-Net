import {Button} from "antd";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators";
const maxLength100 = maxLength(100);

let AddMessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component='textarea' validate={[required, maxLength100]} className="form-control" name="message"/>
                <Button type={'primary'}>Send message</Button>
            </form>
        </div>
    )
}
export default reduxForm({form: 'messageForm'})(AddMessageForm);