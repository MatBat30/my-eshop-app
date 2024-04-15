import React from 'react';
import { Button } from 'primereact/button';

const Footer = () => {
    return (
        <footer className="p-d-flex p-jc-center p-ai-center p-mt-auto " style={{ height: '50px', backgroundColor: '#f0f0f0' }}>
            <div className={ 'p-d-flex p-jc-center p-ai-center' }>
                <Button label="© 2021 - Tous droits réservés" className="p-button-text" />
                <Button label="Politique de confidentialité" className="p-button-text" />

            </div>
        </footer>
    );
};

export default Footer;
