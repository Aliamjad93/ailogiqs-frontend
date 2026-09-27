import { Routes, Route } from "react-router-dom";

import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import HomeSix from "./pages/HomeSix";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Project from "./pages/Project";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeOne />} />
      <Route path="/home-2" element={<HomeTwo />} />
      <Route path="/home-3" element={<HomeThree />} />
      <Route path="/home-4" element={<HomeFour />} />
      <Route path="/home-5" element={<HomeFive />} />
      <Route path="/home-6" element={<HomeSix />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/news" element={<News />} />
      <Route path="/news-details" element={<NewsDetails />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/service" element={<Service />} />
      <Route path="/team" element={<Team />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
