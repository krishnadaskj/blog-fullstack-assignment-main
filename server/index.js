require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT;
const connectDB = require("./db/init");
const cors = require('cors');

const blogs = require("./db/blogs");

if(!PORT) {
    console.error('Port is required');
    return;
}

const app = express();
app.use(express.json());
app.use(cors())
connectDB();

app.get('/blogs', async (req, res) => {
    const data = await blogs.find();

    res.json(data);
})

app.post('/blog', async (req, res) => {
    console.log("REQ", req.body);
    const {author, content, title} = req.body;

    if(!author || !content || !title) {
        res.status(400).json({
            message: "Author, content, title are required"
        });

        return;
    }

    const newBlog = new blogs({
        title: title,
        author: author,
        content: content,
    })

    await  newBlog.save();

    res.json(newBlog);
})


app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});