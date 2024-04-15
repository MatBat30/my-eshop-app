import React, { useState } from 'react';
import Header from './widgets/header.jsx';
import Footer from './widgets/footer.jsx';
import CategoryPage from './widgets/CategoryPage.jsx';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <>
            <div className="p-d-flex p-flex-column" style={{ height: '100vh', width: '100vw', border: '1px solid darkred' }}>
                <Header onCategorySelect={handleCategorySelect} />
                {selectedCategory && <CategoryPage category={selectedCategory} />}
                <Footer />
            </div>

        </>
    );
};

export default App;
