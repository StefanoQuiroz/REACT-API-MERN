//Probando el useEffect con el segundo argumento para saber cuando se ejecutará, fuera del primer render por default
import React, {useState, useEffect} from 'react';

const Formulary = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
/*     //esto se ejecuta en el **PRIMER RENDER** antes de que cargue todo el componente, interesante!!!!
    useEffect(()=>{
        alert("When will this run");
    },[])
    ////////////////////////////////////////////////////////////////////////// */

    //Cuando algo cambiará de estado
    useEffect(()=>{
        alert("When will this run");
    },[data.isSubmitted]);

    const {firstName, lastName, email} = data;

    const onChange = (e) => {
        e.preventDefault();
        const name= e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data)

    }

    
    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={onChange}/>
                </div>
                <input type="submit" value="Send"/>
            </form>
            <div>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Email: {email}</p>
            </div>
        </>
        
    );
}

export default Formulary;
