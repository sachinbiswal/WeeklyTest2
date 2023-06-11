import React,{useEffect, useState} from 'react'

function Details() {
    const[user,setUser]=useState([]);
    const[state,setState]=useState([]);
    const getUser=()=>{
        fetch("https://randomuser.me/api/?results=20")
        .then((res)=>res.json())
        .then((data)=>{console.log(data.results)
            setUser(data.results);
            setState(data.results);
        });
    }
    useEffect(()=>{
      getUser();
    },[])
    
  return (
    <div style={{padding:"10px",marginLeft:'30px',marginRight:'30px'}}>
        <h2>User Details</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati illum aut nisi recusandae animi deserunt accusantium delectus ex maiores enim corporis voluptatum perferendis, laudantium cum excepturi. Saepe tempore eaque tempora, fuga quos accusantium, fugiat neque quaerat a omnis eos illo fugit facere ab assumenda. Vero assumenda quibusdam quod illum at aliquid sint, quo unde blanditiis, consequuntur quia id autem. Consequuntur facere praesentium perspiciatis minus cupiditate numquam reiciendis saepe quod explicabo ea molestias labore sint pariatur atque culpa aliquam unde, expedita, eum possimus inventore, recusandae enim? Eaque incidunt explicabo accusamus, id libero laboriosam fugiat cumque repellendus et commodi ducimus, vero neque.</p>
    
       {
            user.length > 0 && (
                <>
                <input type='radio' value='All' name="gender" onChange={()=>{
            setUser(state);getUser();
        }} defaultChecked/><label>All</label>
        <input type='radio' value='Male' name="gender" onChange={()=>{
            setUser(state.filter((data)=>data.gender==='male'))
        }}/><label>Male</label>
        <input type='radio' value='Female' name="gender" onChange={()=>{
            setUser(state.filter((data)=>data.gender==='female'))}}/><label>Female</label>
                </>
                    
            )
        }
        
        {
            user.length > 0 &&<table width='100%' frame='box' rules='column'>
            <thead style={{background:'black',color:'white',height:'30px'}}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody align='center' >
                {
                    user.map((ele)=>{
                        return(
                            <tr style={{border:'1px solid grey'}}>
                                <td><img src={ele.picture.medium} width={100} height={100}/></td> 
                                <td>{ele.name.first}{ele.name.last}</td>
                                <td>{ele.email}</td>
                                <td>{ele.gender}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        }
    </div>
  )
}

export default Details