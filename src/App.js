import Header from "./components/Header"
import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from "./components/Dashboard";
import Onebox from "./components/Onebox";
import ThreadDetails from "./components/ThreadDetails";

export default function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/google-login" element={<Onebox />} />
        <Route path="/thread/:threadId" element={<ThreadDetails />} />
      </Routes>
    </Router>
   </>
  );
}