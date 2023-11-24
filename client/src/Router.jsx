import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, SignupPage } from './pages';

export default function MyRouter () {
    return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    )
}