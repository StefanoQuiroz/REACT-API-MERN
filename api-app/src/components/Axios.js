import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Axios = (props) => {
    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            //.then(response => setResponseData(response.data.results))  data no olvidar en axios || response.results es solamente para fetch
            //.then(response => response.json())  //colocar esto unicamente en fetch("URL")
            .then(response => setResponseData(response.data.results))
    },[])
    const items = responseData.length > 0 && responseData.map((p,index)=>(<div key={index}>{p.name}</div>))
    return (
        <div>
            <ul>{items}</ul>
        </div>
    );
}

export default Axios;



/* import axios from 'axios';
axios.get('https://www.example.com')
    .then(response => console.log(response)); */