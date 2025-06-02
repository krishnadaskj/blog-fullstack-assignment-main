import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function BlogList() {
    const [selected, setSelected] = useState(null);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="size-full mx-auto mt-10 space-y-4 relative p-5">

            {selected ? <div className="absolute inset-0 bg-white p-5">
                <button className="cursor-pointer" onClick={() => setSelected(null)}>{"< "} Go Back</button>
                <hr/><br/>

                <h2 className="text-xl font-bold">
                    {selected.title}
                </h2>
                <p className="text-sm text-gray-500">By {selected.author}</p><br/>
                <p>{selected.content}</p>
            </div> : blogs.length === 0 ? <p className="text-center text-gray-500">No blogs yet.<br/><br/>Create a <Link
                className="rounded-lg bg-gray-200 px-2 text-blue-600" to="/new">new</Link> one
            </p> : blogs.map(blog => (
                <div key={blog._id} className="p-4 border rounded shadow" onClick={() => {
                    setSelected(blog);
                }}>
                    <h2 className="text-xl font-bold">{blog.title}</h2>
                    <p>{blog.content}</p>
                    <p className="text-sm text-gray-500">By {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
