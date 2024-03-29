import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { getallBots } from '../api/botapi'
import Card from '../Card'
import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
// import botReducer from '../reducers/botReducer'

const Gaming = () => {
    // const bot = useSelector(store => store.bots)
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
                    setbot(data.filter(item => item.type == "gaming"))
                    setnewbot(bot.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
                    console.log(new_bot)
                }
            })
            .catch(err => console.log(err))
    }, [search])

    let [limit, setLimit] = useState(8)

    const filterresult = (e) =>{
        setSearch(e.target.value)
    }


    return (
        <>
            <Nav />

            <h1 className='text-center my-3'>Gaming Bots</h1>

            <div className='container mx-auto my-3'>
                <input type="search" class="form-control " id="exampleFormControlInput1" placeholder="search bots here" onChange={(event) => filterresult(event)} />
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



            <Footer />


        </>
    )
}

export default Gaming