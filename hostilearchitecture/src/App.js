import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import NewPostForm from './pages/NewPostForm/NewPostForm'
import About from './pages/About/About'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<NewPostForm />} />
          <Route path="/info" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
