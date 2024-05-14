import './App.css'
import Header from '../components/Header'
import FOOTER from '../components/Footers'
import Sidebar from '../components/sidebar'
import CreatePost from '../components/Createpost'
import PostList from '../components/PostList'
import Handlecontextprovder from '../store/postlistcontext'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedtab, setselectedtab] = useState("posts");

  return (

    <Handlecontextprovder>
      <div className="app-container">
        <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab} ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedtab === 'posts' ? <PostList></PostList> : <CreatePost></CreatePost>}


          <FOOTER></FOOTER>
        </div>
      </div>
    </Handlecontextprovder>
  )
}

export default App
