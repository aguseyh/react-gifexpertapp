import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(["Naruto"]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setcategories} />
            <hr />

            <ol>
                {categories.map((cat) => (
                    <GifGrid key={cat} category={cat}></GifGrid>
                ))}
            </ol>
        </>
    );
};
