import React from 'react';
import './User.css';
function User(props){

    const [name,setName] = React.useState("");
    const [interest,setInterest] = React.useState("");
    const [tnc,setTNC] = React.useState(false);


    function getData(event){
        event.preventDefault();
        console.log(name);
        console.log(interest);
        console.log(tnc);
    }
    return(
        <div className='container'>
            <h1>Form in ReactJS</h1> <br /> <br />
            <form onSubmit={ getData }>
                <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} />
                <br /> <br />
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Selection Options</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select> <br /> <br />
                <input type="checkbox" onChange={(e)=>setTNC(e.target.checked)} /> <span>Accept terms and Condtion</span>
                <br /> <br />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );

}

export default User;