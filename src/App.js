import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Newscomp from './components/Newscomp'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Newscomp country={'in'} key='general' category={'general'} />} />

            {/* <Route exact path="/business" element={<Newscomp country={'in'} category={'business'} key='business' />} /> */}
            <Route exact path="/entertainment" element={<Newscomp country={'in'} key='entertainment' category={'entertainment'} />} />
            <Route exact path="/sports" element={<Newscomp country={'in'} key='sports' category={'sports'} />} />
            <Route exact path="/health" element={<Newscomp country={'in'} key='health' category={'health'} />} />
            <Route exact path="/technology" element={<Newscomp country={'in'} key='technology' category={'technology'} />} />
            <Route exact path="/science" element={<Newscomp country={'in'} key='science' category={'science'} />} />

          </Routes>
        </Router>

      </div>
    )
  }
}
