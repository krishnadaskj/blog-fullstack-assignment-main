import { useState } from "react";

export default function BlogForm() {
    const [formData, setFormData] = useState({ title: "", content: "", author: "" });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await fetch("http://localhost:3000/blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        setLoading(false);
        alert("Blog added!");
        setFormData({ title: "", content: "", author: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 space-y-4">
            <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" />
            <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} className="w-full p-2 border rounded h-[300px]" />
            <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="w-full p-2 border rounded" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-400" disabled={loading}>
                {loading ? "Creating..." : "Add Blog"}
            </button>
        </form>
    );
}
