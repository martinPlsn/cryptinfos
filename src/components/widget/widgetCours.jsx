import React, { useEffect } from 'react';

const CoinPriceMarquee = () => {
  useEffect(() => {
    // Le widget Coingecko sera automatiquement chargé et affiché grâce au script ajouté dans le HTML.
    // Vous n'avez pas besoin de le manipuler directement via React.
  }, []);

  return (
    <div>
      {/* Vous pouvez ajouter d'autres composants React ou éléments HTML ici si nécessaire */}
    </div>
  );
};

export default CoinPriceMarquee;
