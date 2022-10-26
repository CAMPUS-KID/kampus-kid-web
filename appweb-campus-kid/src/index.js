import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentDash from './pages/studentDash';
import TeacherDash from './pages/teacherDash';
import AcademicInformation from './pages/academicInformation';
import EnrollmentProcess from './pages/enrollmentProcess';
import PersonalInformation from './pages/personalInformation';
import AcademicHistory from './pages/academicHistory';
import './index.css';


/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
ReactDOM.render(
  <BrowserRouter>   
      <Header />
      <Routes>
          <Route exact path='/' element={<App />}/>
          <Route exact path='/student' element={<StudentDash/>}/>
          <Route exact path='/teacher' element={<TeacherDash/>}/>
          <Route exact path='/personal' element={<PersonalInformation />}/>
          <Route exact path='/academic' element={<AcademicInformation />}/>
          <Route exact path='/enrollment' element={<EnrollmentProcess />}/>
          <Route exact path='/financial' element={<AcademicHistory />}/>
      </Routes>
      <Footer />
  </BrowserRouter>,
  document.getElementById('root')
)



