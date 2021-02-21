import { Router } from '@reach/router';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Post from '../pages/Post';

function AppRouter() {
    return (
        <Router>
            <Home path="/" />
            <Post path="/post" />
            <About path="/about" />
            <Contact path="/contact" />
        </Router>
    );
}

export default AppRouter;
