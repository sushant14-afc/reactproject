//for adding bot

export const addBot = (bot)=>{
    // console.log(bot)
    return fetch(`http://localhost:8000/api/addbot`, {
        method:"POSt",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(bot)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}


export const getallBots = () =>{
    return fetch(`http://localhost:8000/api/botlist`,{
        method:"GET"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

