import { useState } from "react";
import Audioform from "./Audioform";
import Axios from "axios";
function CreateNew()
{
    const [arr, setArr] = useState([]);
    const getState = (childData)=>{
        setArr(childData);
    }
    
    const handleSubmit = () =>{
        const data = {name:arr[0], description:arr[1], url:arr[2]};
        Axios.post("https://podcast-streaming-backend.onrender.com/audioroute/create-new", data)
        .then((res)=>{
            if(res.status===200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <Audioform getState={getState}/>
        </form>
    )
}
export default CreateNew;