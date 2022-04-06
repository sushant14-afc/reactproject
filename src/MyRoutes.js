import React from 'react'
import { BrowserRouter, Route, Switch as Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Gaming from './Pages/Gaming'
import Music from './Pages/Music'
import Entertainment from './Pages/Entertainment'
import Utility from './Pages/Utility'
import Productivity from './Pages/Productivity'
import BotDetail from './Pages/BotDetail'
import Signin from './Pages/Signin'
import AddBot from './Pages/AddBot'
import AddBotSuccess from './Pages/AddBotSuccess'
import Signup from './Pages/Signup'
import Confirm from './Pages/Confirm'
import Test from './Pages/Test'
import Bots from './Pages/Bots'




const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' component={Home}/>
                <Route exact path='/gaming' component={Gaming}/>
                <Route exact path='/music' component={Music}/>
                <Route exact path='/entertainment' component={Entertainment}/>
                <Route exact path='/utility' component={Utility}/>
                <Route exact path='/productivity' component={Productivity}/>
                <Route exact path='/botdetail' component={BotDetail}/>
                <Route exact path='/signin' component={Signin}/>
                <Route exact path='/addbot' component={AddBot}/>
                <Route exact path='/addbotsuccess' component={AddBotSuccess}/>
                <Route exact path='/register' component={Signup}/>
                <Route exact path='/email/confirmation/:id' component={Test}/>

                <Route exact path='/bots' component={Bots}/>
                {/* <Route exact path='/test' component={Test}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes