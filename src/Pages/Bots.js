import React, { useEffect, useState } from 'react'
import { getallBots } from '../api/botapi'
import Nav from '../layout/Nav'
import Card from '../Card'

const Bots = () => {

    const [bots, setBots] = useState([])

    useEffect(() => {
        getallBots()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setBots(data)
                }
            })
            .catch(err => console.log(err))

    }, [])



    return (
        <>
            
            <h3>BOT List</h3>

            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        bots.map(item => (
                            <Card item={item}/>

                        ))


                    }

                </div>
            </div>

                
        
            {/* { bots.map(bot => <li> {bot.name}</li> */}
        </>
    )
}

export default Bots