import React from 'react';
import { useParams } from 'react-router';

const Error404 = () => {
    const status = useParams();
    let statusCode = '404';
  
    if (status['*']?.includes('500')) statusCode = '500';
    if (status['*']?.includes('404')) statusCode = '404';
  
    return (
      <div className="error404">
        <h1>Erreur {statusCode}</h1>
        {statusCode === '404' ? (
          <h2>Cette page est introuvable</h2>
        ) : (
          <h2>Erreur serveur : veuillez contacter l'administrateur</h2>
        )}
      </div>
    );
  };
  
  export default Error404;
  
