import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1/Page1.jsx';
import Page2 from './pages/Page2/Page2.jsx';
import Page3 from './pages/Page3/Page3.jsx';
import Location1 from './pages/Location1/Location1.jsx';
import Location1Page1 from './pages/Location1Page1/Location1Page1.jsx';
import Location1Page2 from './pages/Location1Page2/Location1Page2.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} /> {/* /page1 */}
        <Route path="/page2" element={<Page2 />} /> {/* /page2 */}
        <Route path="/page3" element={<Page3 />} /> {/* /page3 */}
        <Route path="/location1" element={<Location1 />} /> {/* /location1 */}
        <Route path="/location1/page1" element={<Location1Page1 />} /> {/* /location1page1 촬영페이지 */}
        <Route path="/location1/page2" element={<Location1Page2 />} /> {/* /location1page2 */}
        <Route path="*" element={<h1>Not Found</h1>} /> {/* 404 페이지 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
