import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';

const ProductCard = ({ products }) => {
    const calculateDiscountedPrice = (price, discountPercentage) => {
        return (price - (price * discountPercentage) / 100).toFixed(2);
    };

    return (
        <div className="p-grid">
            {products.map((product) => (
                <div key={product.id} className="p-col-12 p-md-4 p-lg-4" style={{ padding: '0.5em' }}>
                    <Card
                        title={product.title}
                        subTitle={`${product.brand} - ${product.category}`}
                        style={{ width: '100%', margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                        header={
                            <img alt={product.title} src={product.thumbnail} style={{ width: '25%', height: 'auto', display: 'block' }} />
                        }
                        footer={
                            <span>
                                <Button label="Add to Cart" icon="pi pi-shopping-cart" />
                            </span>
                        }
                    >
                        <Rating value={product.rating} readonly stars={5} cancel={false} />
                        <p className="p-mt-2">{product.description}</p>
                        <h4>Price: ${product.price}</h4>
                        <h4>Discounted: ${calculateDiscountedPrice(product.price, product.discountPercentage)}</h4>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
