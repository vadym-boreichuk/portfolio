import { Route, Routes } from "react-router-dom";
import { AppBar } from "./components/AppBar/AppBar";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/Contact";
import { EducationPage } from "./pages/Education";
import { ExperiencePage } from "./pages/Experience";
import { ProjectsPage } from "./pages/Projects";
import { SkilsPage } from "./pages/Skils";
import { Wrapper } from "./App.styled";

export const App = () => {
  return (
    <Wrapper>
      <AppBar />
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="skils" element={<SkilsPage />} />
      </Routes>
    </Wrapper>
  );
};
