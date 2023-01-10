import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import NewPostForm from './pages/NewPostForm/NewPostForm'
import Info from './pages/info/info'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<NewPostForm />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
