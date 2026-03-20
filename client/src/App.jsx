import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <div className="max-w-360 m-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/education" element={<EducationPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
