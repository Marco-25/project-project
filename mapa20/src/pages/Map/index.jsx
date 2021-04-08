import * as React from 'react';

const Map = () => {
    // Crie uma referência para o elemento HTML em que queremos colocar o mapa
    const mapRef = React.useRef(null);


    /**
    * Crie a instância do mapa
    * Embora `useEffect` também possa ser usado aqui,` useLayoutEffect` irá renderizar
    * o mapa mais cedo
    */
    React.useLayoutEffect(() => {
        // `mapRef.current` será` undefined` quando este gancho for executado pela primeira vez; caso extremo que
        if (!mapRef.current) return;
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "wsnXhbk9rgSNwv7jNf1-9rGy39M2IIvnpdWt7IGDDbQ"
        });
        const defaultLayers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: { lat: -22.2156851, lng: -49.6537427 },
            zoom: 14,
            pixelRatio: window.devicePixelRatio || 1
        });

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

        const ui = H.ui.UI.createDefault(hMap, defaultLayers);

        // Isso funcionará como uma limpeza a ser executada assim que este gancho for executado novamente.
        // Isso inclui quando o componente desmonta
        return () => {
            hMap.dispose();
        };
    }, [mapRef]); // Isso executará este gancho toda vez que esta referência for atualizada

    return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};

export { Map };