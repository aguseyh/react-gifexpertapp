import React, { useState } from "react";
import { func } from "prop-types";

export const AddCategory = ({ setCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue && setCategory((cat) => [inputValue, ...cat]);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategory: func.isRequired,
};
