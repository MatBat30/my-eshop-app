import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import ProductCard from './productCard.jsx';

const CategoryPage = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);  // Aucun filtre n'est appliqué initialement.

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await response.json();
            setProducts(data.products);
            // Extrait les marques uniques pour le dropdown
            const uniqueBrands = [...new Set(data.products.map(product => product.brand))];
            setBrands(uniqueBrands.map(brand => ({ label: brand, value: brand })));
        };

        fetchProductsByCategory();
    }, [category]);  // Le chargement des produits ne dépend que de la catégorie.

    const onBrandChange = (e) => {
        setSelectedBrand(e.value);
    };

    // Applique le filtre seulement si une marque est sélectionnée
    const filteredProducts = selectedBrand ? products.filter(product => product.brand === selectedBrand) : products;

    return (
        <div>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <Dropdown value={selectedBrand} options={brands} onChange={onBrandChange} placeholder="Select a Brand" />
            <ProductCard products={filteredProducts}  />
        </div>
    );
};

export default CategoryPage;
