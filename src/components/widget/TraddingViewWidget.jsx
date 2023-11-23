import React, { useEffect } from 'react';
import './TraddingViewWidget.css'

const TradingViewWidget = () => {
  useEffect(() => {
    // Créez un élément <script> pour charger le script TradingView
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';

    // Configurez les options du widget
    const widgetConfig = {
      width: 1000,
      height: 490,
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'light',
      locale: 'fr',
    };

    // Ajoutez les options du widget comme un attribut de données
    script.innerHTML = `{
      "width": ${widgetConfig.width},
      "height": ${widgetConfig.height},
      "defaultColumn": "${widgetConfig.defaultColumn}",
      "screener_type": "${widgetConfig.screener_type}",
      "displayCurrency": "${widgetConfig.displayCurrency}",
      "colorTheme": "${widgetConfig.colorTheme}",
      "locale": "${widgetConfig.locale}"
    }`;

    // Sélectionnez l'élément DOM où vous voulez afficher le widget
    const container = document.querySelector('.tradingview-widget-container__widget');

    if (container) {
      // Effacez le contenu de l'élément container
      container.innerHTML = '';

      // Ajoutez le script au DOM
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://fr.tradingview.com/"
          
        >
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
