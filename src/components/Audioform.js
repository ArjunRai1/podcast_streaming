import { useState } from "react";

function AudioForm(props) {
  const [name, setName] = useState(props.nameValue);
  const [description, setDescription] = useState(props.descriptionValue);
  const [url, setUrl] = useState(props.urlValue);

  const handleClick = () => {
    const formData = { name, description, url };
    props.getState(formData);
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input
        defaultValue={props.nameValue}
        onChange={(event) => setName(event.target.value)}
        className="form-control my-3"
        placeholder="Enter your name"
      />
      <input
        defaultValue={props.descriptionValue}
        onChange={(event) => setDescription(event.target.value)}
        className="form-control my-3"
        placeholder="Enter the description"
      />
      <input
        defaultValue={props.urlValue}
        onChange={(event) => setUrl(event.target.value)}
        className="form-control my-3"
        placeholder="Enter url"
      />
      <button onClick={handleClick} className="btn btn-success my-3 d-block mx-auto" type="button">
        Submit
      </button>
    </div>
  );
}

export default AudioForm;
