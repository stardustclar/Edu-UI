import '../dist/output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './page/SignIn';
import Onboard from './page/Onboard';
import Home from './page/Home';
import Subject from './page/Subject';
import Video from './page/Video';
import Live from './page/Live';
import Notif from './page/Notif';
import Physics from './page/Physics';
import Physics2 from './page/Physics2';
import Materials from './page/Materials';

function App() {
  return (
    <div className='font-Poppins'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/onboard' element={<Onboard />} />
          <Route path='/subject' element={<Subject />} />
          <Route path='/video' element={<Video />} />
          <Route path='/live' element={<Live />} />
          <Route path='/notif' element={<Notif />} />
          <Route path='/phy' element={<Physics />} />
          <Route path='/phy2' element={<Physics2 />} />
          <Route path='/mater' element={<Materials />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

