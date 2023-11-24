import { useState } from "react";

function AudioForm(props) {
  const [name, setName] = useState(props.nameValue);
  const [description, setDescription] = useState(props.descriptionValue);
  const [url, setUrl] = useState(props.urlValue);

  const handleClick = () => {
    const formData = { name, description, url };
    console.log('Data in Audioform:', formData);
    props.getState(formData);
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input value={name} defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} class="form-control my-3" placeholder="Enter the name" />
      <input value={description} defaultValue={props.descriptionValue} onChange={(event) => setDescription(event.target.value)} class="form-control my-3" placeholder="Enter the description" />
      <input value={url} defaultValue={props.urlValue} onChange={(event) => setUrl(event.target.value)} class="form-control my-3" placeholder="Enter url" />
      <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">
        Submit
      </button>
    </div>
  );
}

export default AudioForm;
