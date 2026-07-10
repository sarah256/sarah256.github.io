import { Navigate, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ProgrammingPage } from './pages/ProgrammingPage'
import { DesignPage } from './pages/DesignPage'
import { ResumePage } from './pages/ResumePage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProgrammingPage />} />
        <Route path="programming" element={<Navigate to="/projects" replace />} />
        <Route path="design" element={<DesignPage />} />
        <Route path="portfolio" element={<Navigate to="/design" replace />} />
        <Route path="resume" element={<ResumePage />} />
      </Route>
    </Routes>
  )
}
