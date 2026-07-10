import { Routes, Route } from 'react-router-dom'
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
        <Route path="programming" element={<ProgrammingPage />} />
        <Route path="design" element={<DesignPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Route>
    </Routes>
  )
}
