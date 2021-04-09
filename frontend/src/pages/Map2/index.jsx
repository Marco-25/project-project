import styled from 'styled-components';
import * as React from 'react';
import Menu from '../../components/Menu';

const ContainerMap = styled.div`
  max-width:1024px;
  width: 100%;
  height: 500px;
  margin: 5rem auto;
  padding: 0 2%;
  background-color:  transparent;
  color:  #788288;
  box-shadow: 0 0 2px 1px black;
`;

const Map2 = () => {
    const mapRef = React.useRef(null);

    function addMarkerToGroup(group, coordinate, html) {
        const H = window.H;
        var marker = new H.map.Marker(coordinate);
        marker.setData(html);
        group.addObject(marker);
    }

    const addInfoBubble = React.useCallback((map)=>  {
        const H = window.H;
        const ui = H.ui.UI;
        const group = new H.map.Group();

        map.addObject(group);

        group.addEventListener('tap', function (evt) {
            evt.preventDefault();
            let bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
                content: evt.target.getData()
            });
            ui.addBubble(bubble)
            console.log('clicou')
        });

        addMarkerToGroup(group, {lat:-22.2154766, lng:-49.6538883},
            '<div><a href="http://www.mcfc.co.uk" target="_blank">Fulltime</a>' +
            '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');

        addMarkerToGroup(group, {lat:-22.2165197, lng:-49.6486929},
            '<div><a href="http://www.liverpoolfc.tv" target="_blank">Liverpool</a>' +
            '</div><div >Anfield<br>Capacity: 45,362</div>');

    },[]);

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

    
        addInfoBubble(hMap);

    }, [addInfoBubble, mapRef]);


    return (
        <>
            <Menu />
            <ContainerMap className="map" ref={mapRef}>
                
            </ContainerMap>
        </>
    );
};

export default Map2;