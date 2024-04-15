// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';

// eslint-disable-next-line react/prop-types
const Header = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://dummyjson.com/products/categories');
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    const menuItems = categories.map(category => ({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        icon: 'pi pi-fw pi-tag',
        command: () => onCategorySelect(category)
    }));

    return <Menubar model={menuItems} />;
};

export default Header;
