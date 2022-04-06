import React, { useState, useEffect } from 'react'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'

const BotDetail = (props) => {
  const [bot, setBot] = useState({})

  useEffect(() => {
    setBot(props.location.state.item)
  }, [])

  return (
    <>
      <Nav />

      <h3 className='mt-5'>Bot Details</h3>
      {/* {console.log(bot.name)} */}

      <div className='container mx-auto shadow-lg my-5'>
        <div className="row">
          <div className='overflow-hidden col-sm-12 col-md-6' style={{"height":"400px"}}>
          <img src={bot.image} alt="..." className='custom-image h-100 w-100'/>
          </div>
          <div className="col-sm-12 col-md-6 text-start pt-5">
            <h4 className="card-title mb-2">Name:{bot.name}</h4>
            <h4 className="card-text mb-2">Category:{bot.type}</h4>
            
            <h5 className="card-text mb-2"><small class="text-muted">Description:{bot.detail}</small></h5>
            <a href={`${bot.link}`}>@{bot.name}</a>
            
            <h5>{bot.like}<i class="cursor-pointer bi bi-hand-thumbs-up"></i>,  {bot.dislike}<i class="bi bi-hand-thumbs-down"></i></h5>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default BotDetail