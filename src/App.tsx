import { EventList, EventDetail } from '@pages/index';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <HashRouter>
    <Routes>
      <Route element={<Navigate to="/events" />} path="/" />
      <Route element={<EventList />} path="/events" />
      <Route element={<EventDetail />} path="/events/:eventId" />
    </Routes>
  </HashRouter>
);

export default App;
