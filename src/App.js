import React, { Component } from 'react'

import Tabbar from './components/tabbar/tabbar.jsx'
import Home from './components/home/Home.jsx'
import My from './components/my/My.jsx'
import Info from './components/info/Info.jsx'
import Search from './components/search/Search.jsx'
import "antd-mobile/dist/antd-mobile.css"
import {HashRouter as Router,Route} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
           <Router>
               {/*tab='home' 传过去 为更改点击样式做准备  */}
               <Route path="/" 
               exact render={(props)=><Tabbar tab='home' {...props}><Home {...props}></Home></Tabbar>}>
               </Route>
               <Route path="/search" 
               exact render={(props)=><Tabbar tab='search' {...props}><Search {...props}></Search></Tabbar>}>
               </Route>
               <Route path="/info" 
               exact render={(props)=><Tabbar tab='info' {...props}><Info {...props}></Info></Tabbar>}>
               </Route>
               <Route path="/my" 
               exact render={(props)=><Tabbar tab='my' {...props}><My {...props}></My></Tabbar>}>
               </Route>
           </Router>
        )
    }
}
