import React, { useEffect, useMemo, useState } from 'react';
import Item from "./Item";
import "./Showposts.scss";
import { blogposts } from './PostsData/Posts';


function ShowPosts(){
    const [blogList, setBlogList] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState();

    // Add default value on page load
    useEffect(() => {
        setBlogList(blogposts);
    }, []);

    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedCategory is null
        if (!selectedCategory) {
            return blogList;
        }
        return blogList.filter((item) => item.category === selectedCategory);
    }

    // Avoid duplicate function calls with useMemo
    var filteredList = useMemo(getFilteredList, [selectedCategory, blogList]);

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value);
    }

    return (
        <div>
            <h1 className='entry-title'>Blog Posts</h1>

            <select
                name="category-list"
                id="category-list"
                onChange={handleCategoryChange}
            >
                <option value="">All</option>
                <option value="internet-security">Internet Security</option>
                <option value="mobile-security">Mobile Security</option>
                <option value="family-safety">Family Safety</option>
                <option value="security-news">Security News</option>
            </select>

                <div className="entry-content">
                    {filteredList.map((element, index) => (
                    <Item {...element} key={index} />
                    ))}
                </div>
            </div>
    );

}

export default ShowPosts;