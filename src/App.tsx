import { Routes, Route} from 'react-router-dom';
import TaskPage from './pages/taskPage/TaskPage';
import ContactPage from './pages/contactPage/ContactPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/homePage/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="task" element={<TaskPage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
