import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1/Page1.jsx';
import Page2 from './pages/Page2/Page2.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} /> {/* /page1 */}
        <Route path="/page2" element={<Page2 />} /> {/* /page1 */}
        <Route path="*" element={<h1>Not Found</h1>} /> {/* 404 페이지 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
