import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { ContactsPage } from './components/Pages/ContactsPage';
import { ProjectsPage } from './components/Pages/ProjectsPage';
import { AboutPage } from './components/Pages/AboutPage';
import { HomePage } from './components/Pages/HomePage';

function App() {
  return (
    <BrowserRouter basename="/react-spa-portfolio">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
