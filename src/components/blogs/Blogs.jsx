/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Fetch error:', error));
    }, []);
    

    return (
        <div>
            
        </div>
    );
};

export default Blogs;