import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1/Page1.jsx';
import Page2 from './pages/Page2/Page2.jsx';
import Page3 from './pages/Page3/Page3.jsx';
import Location1 from './pages/Location1/Location1.jsx';
import Location1Page1 from './pages/Location1Page1/Location1Page1.jsx';
import Location1Page2 from './pages/Location1Page2/Location1Page2.jsx';
import Location2 from './pages/Location2/Location2.jsx';
import Location2Page1 from './pages/Location2Page1/Location2Page1.jsx';
import Location2Page2 from './pages/Location2Page2/Location2Page2.jsx';
import Location3 from './pages/Location3/Location3.jsx';
import Location3Page1 from './pages/Location3Page1/Location3Page1.jsx';
import Location3Page2 from './pages/Location3Page2/Location3Page2.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} /> {/* /page1 */}
        <Route path="/page2" element={<Page2 />} /> {/* /page2 */}
        <Route path="/page3" element={<Page3 />} /> {/* /page3 */}
        <Route path="/location1" element={<Location1 />} /> {/* /location1 */}
        <Route path="/location1/page1" element={<Location1Page1 />} /> {/* /location1page1 퀴즈페이지 */}
        <Route path="/location1/page2" element={<Location1Page2 />} /> {/* /location1page2 */}
        <Route path="/location2" element={<Location2 />} /> {/* /location2 */}
        <Route path="/location2/page1" element={<Location2Page1 />} /> {/* /location2page1 촬영페이지*/}
        <Route path="/location2/page2" element={<Location2Page2 />} /> {/* /location2page2 */}
        <Route path="/location3" element={<Location3 />} /> {/* /location3 */}
        <Route path="/location3/page1" element={<Location3Page1 />} /> {/* /location3page1 촬영페이지*/}
        <Route path="/location3/page2" element={<Location3Page2 />} /> {/* /location3page2 */}
        <Route path="*" element={<h1>Not Found</h1>} /> {/* 404 페이지 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
