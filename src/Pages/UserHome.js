import React, { useState, useEffect } from 'react'
import { getallBots } from '../api/botapi'
import Card from '../Card'
import Nav from '../layout/Nav'
import Bots from './Bots'

const UserHome = () => {
    const [bot, setbot] = useState([])
    const [new_bot, setnewbot] = useState([])
    let [search, setSearch] = useState('')


    useEffect(() => {
        getallBots()
            .then((data) => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setbot(data)
                    setnewbot(bot.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
                    console.log(new_bot)
                }
            })
            .catch(err => console.log(err))
    }, [search])

    let [limit, setLimit] = useState(8)


    return (
        <div>
            <Nav/>
            <h1 className='text-center my-3'>Bots</h1>

            <div className='container mx-auto my-3'>
                <input type="search" class="form-control " id="exampleFormControlInput1" placeholder="search bots here" onChange={(event) => setSearch(event.target.value)} />
            </div>
            <div className='container mx-auto'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        new_bot.slice(0, limit).map(item => (
                            <Card item={item} />
                        ))
                    }
                </div>
                {
                    limit < new_bot.length &&
                    <button className='btn btn-warning' onClick={() => setLimit(limit + 4)}>Load More</button>
                }
            </div>


        </div>
    )
}

export default UserHome