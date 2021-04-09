import * as React from 'react';
import Menu from '../../components/Menu';
import { ContainerMap } from './mapstyle';

const Map = () => {
    const mapRef = React.useRef(null);

    function addMarkersToMap(map) {
        const H = window.H;
        var ft = new H.map.Marker({lat:-22.2154766, lng:-49.6538883});
        map.addObject(ft);
    }

    React.useEffect(() => {
 
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

    new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    H.ui.UI.createDefault(hMap, defaultLayers);

   
    addMarkersToMap(hMap);

    }, [mapRef]);


    return (
        <>
            <Menu />
            <ContainerMap className="map" ref={mapRef}>
                
            </ContainerMap>
        </>
    );
};

export default Map;