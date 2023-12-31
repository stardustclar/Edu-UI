import '../dist/output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './page/SignIn';
import Onboard from './page/Onboard';
import Subject from './page/Subject';
import Video from './page/Video';
import Live from './page/Live';
import Notif from './page/Notif';
import Physics from './page/Physics';
import Physics2 from './page/Physics2';
// import Materials from './page/Materials';
import Dashboard from './page/Dashboard';
import Materials from './page/Materials';
import Document from './page/Document';
import Exam from './page/Exam';
import ExamStarted from './page/ExamStarted';
import LeaderBoard from './page/LeaderBoard';
import Julian from './page/Julian';
import Chat from './page/Chat';
import Group from './page/Group';
import Chating from './page/Chating';

function App() {
  return (
    <div className='font-Poppins'>
      <Router>
        <Routes>
          <Route path='/' element={<Onboard />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/subject' element={<Subject />} />
          <Route path='/video' element={<Video />} />
          <Route path='/live' element={<Live />} />
          <Route path='/notif' element={<Notif />} />
          <Route path='/phy' element={<Physics />} />
          <Route path='/phy2' element={<Physics2 />} />
          <Route path='/mater' element={<Materials />} />
          <Route path='/doc' element={<Document />} />
          <Route path='/exam' element={<Exam />} />
          <Route path='/examstarted' element={<ExamStarted />} />
          <Route path='/leader' element={<LeaderBoard />} />
          <Route path='/julian' element={<Julian />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/group' element={<Group />} />
          <Route path='/chating' element={<Chating />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

