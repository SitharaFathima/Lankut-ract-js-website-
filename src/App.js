import './App.css';

// package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

// components
import Landingpage from './components/screens/Landingpage'


function App() {
    return (
        <>
            <Helmet>
                <title>Langkut</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
