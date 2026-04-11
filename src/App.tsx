/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OceanTrash from "./pages/posts/OceanTrash";
import BootstrapClass from "./pages/posts/BootstrapClass";
import Club from "./pages/posts/Club";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/ocean-trash" element={<OceanTrash />} />
        <Route path="posts/bootstrap-class" element={<BootstrapClass />} />
        <Route path="posts/club" element={<Club />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
