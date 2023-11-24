import { useState } from "react";
import Audioform from "./Audioform";
import axios from "axios";
import backgroundImage from "./books.jpg";
function CreateNew()
{
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    url: "",
  });
    
  const handleChange = (childData) => {
    setFormData({
      ...formData,
      ...childData,
    });
  };
    const handleSubmit = (event) => {
        console.log("Submitted");
        event.preventDefault();
      const data = {...formData};
        
      
        axios.post("https://podcast-streaming-backend.onrender.com/audioroute/create-new", data)
          .then((res) => {
            console.log('Response:', res);
            if (res.status === 200) {
              alert("Record added successfully");
            } else {
              alert("Unexpected response status: " + res.status);
            }
          })
          .catch((err) => {
            console.error('Error:', err);
            alert("Error: " + err.message);
          });
      };
      
    
    return(
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        
        <form onSubmit={handleSubmit}>
            <Audioform getState={handleChange} />
            
        </form>
        </div>
        
    )
}
export default CreateNew;