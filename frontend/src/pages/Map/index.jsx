import * as React from 'react';
import Menu from '../../components/Menu';
import { Container } from '../../Styled';

const Map = () => {
    const mapRef = React.useRef(null);
    React.useLayoutEffect(() => {

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

        // const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

        // const ui = H.ui.UI.createDefault(hMap, defaultLayers);


        return () => {
            hMap.dispose();
        };
    }, [mapRef]);

    return (
        <>
            <Menu />
            <Container className="map" ref={mapRef} style={{ height: "500px" }}>
                <div />
            </Container>
        </>
    );
};

export default Map;