import React from 'react'
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
// import  {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login/Login'
import NotFound from '../containers/NotFound/NotFound'
import Register from '../containers/Register.js/Register'


const App = () => (
    <BrowserRouter>
    <Layout>
    <Routes>
    <Route exact path='/' element={<Home />}/>
    <Route exact path='/login' element={<Login />}/>
    <Route exact path='/register' element={<Register />}/>
    <Route path='*' element={<NotFound />}/>
    </Routes>

    </Layout>

    </BrowserRouter>
)

export default App