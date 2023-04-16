import { EventList } from '@pages/index';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Navigate to="/events" />} path="/" />
      <Route element={<EventList />} path="/events" />
    </Routes>
  </HashRouter>
);

export default App;
