import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../containers/Home/Home'
import Login from '../containers/Login/Login'
import NotFound from '../containers/NotFound/NotFound'
import Players from '../containers/Players/Players'
import Register from '../containers/Register.js/Register'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<Register />}/>
                <Route exact path='/player/:id' element={<Players />}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
)

export default App