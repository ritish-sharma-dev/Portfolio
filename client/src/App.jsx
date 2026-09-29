import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GalaxyStars from "./components/GalaxyStars";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

function App() {
    return (
        <>
            <GalaxyStars />
            <div className="relative z-10 @container max-w-360 m-auto bg-transparent text-slate-100 antialiased">
                <BrowserRouter>
                    <Navbar/>
                    <ScrollToTop />
                    <Suspense fallback={null}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/skills" element={<SkillsPage />} />
                            <Route path="/education" element={<EducationPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </Suspense>
                    <Footer/>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
