import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Bots from './Pages/Bots';

const Card = ({ item }) => {
    const [redirect, setRedirect] = useState(false)
    const redirectto = () => {
        if (redirect) {
            return <Redirect to={{pathname:'/botdetail', state:{item} }}/>
            // console.log(redirect)
        }
    }
    
    return (
        <>
{redirectto()}
            <div className="col p-2">
                <div className="card">
                    <div className='card-img-container'>
                        <img src={item.image} className="card-img-top custom-image" alt="..." height={200} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name: {item.name}</h5>
                        <h5 className="card-title">type: {item.type}</h5>

                        
                        {/* <h5 className='card-text'>Type:{item.type}</h5> */}
                        {/* <p className="card-text">{item.detail}</p> */}
                        <div className='d-flex justify-content-between mx-auto'>
                            <div>{item.like}<i class="bi bi-hand-thumbs-up"></i></div>
                            <div>{item.dislike}<i class="bi bi-hand-thumbs-down"></i></div>
                        </div>
                        <a href='' className='text-decoration-none' onClick={()=>setRedirect(true)}    >View Details</a>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Card