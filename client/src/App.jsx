import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import AllBlogsPage from "./pages/all.jsx";
import NewBlogPage from "./pages/new.jsx";

function App() {
    return (
        <Router>
            <nav className="bg-gray-200 p-4 flex gap-4 justify-between">
                <h1 className="text-2xl font-bold text-blue-500">Blogs</h1>
                <div className="flex items-center divide-x divide-gray-400">
                    <Link to="/" className="hover:underline px-3">All Blogs</Link>
                    <Link to="/new" className="hover:underline px-3">Add Blog</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<AllBlogsPage/>}/>
                <Route path="/new" element={<NewBlogPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
