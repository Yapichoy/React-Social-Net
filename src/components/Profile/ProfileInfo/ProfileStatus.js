import React, {useState, useEffect} from "react";

const ProfileStatus = (props) => {
  const [editMode, setMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);
  const onChange = (e) => {
    setStatus(e.currentTarget.value);
  }
  const updateStatus = () => {
    setMode(false);
    props.updateStatus(status);
  }
  return (
    <>
      {!editMode &&
      <div onDoubleClick={() => setMode(true)}>
        <span>{props.status || 'type status'}</span>
      </div>
      }

      {editMode &&
      <div>
        <input onChange={onChange} autoFocus={true} value={status} onBlur={updateStatus}/>
      </div>
      }
    </>
  )
}

export default ProfileStatus;