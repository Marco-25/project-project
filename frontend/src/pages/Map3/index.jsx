import * as React from 'react';
import styled from 'styled-components';
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

const Map3 = () => {
    const mapRef = React.useRef(null);

    const [modal, setModal] = React.useState(false);

    function addDomMarker(map) {
        const H = window.H;
        const outerElement = document.createElement('div'),
            innerElement = document.createElement('div');

        innerElement.style.color = 'red';
        innerElement.style.backgroundColor = 'transparent';
        innerElement.style.font = 'normal 12px arial';
        innerElement.style.lineHeight = '12px'

        innerElement.style.borderRadius = '50px';
        innerElement.style.width = '50px';
        innerElement.style.height = '50px';

        outerElement.appendChild(innerElement);

        innerElement.innerHTML = `
            Fulltime
            <img src="images/map.png" alt="icone" width="20" />
        `;

        function changeOpacity(evt) {
            evt.target.style.opacity = 0.6;
        };

        function changeOpacityToOne(evt) {
            evt.target.style.opacity = 1;
        };

        const domIcon = new H.map.DomIcon(outerElement, {
            onAttach: function (clonedElement, domIcon, domMarker) {
                clonedElement.addEventListener('mouseover', changeOpacity);
                clonedElement.addEventListener('mouseout', changeOpacityToOne);

                clonedElement.addEventListener('click', () => {
                    console.log("clicou");
                    setModal(true);
                });
            },
            onDetach: function (clonedElement, domIcon, domMarker) {
                clonedElement.removeEventListener('mouseover', changeOpacity);
                clonedElement.removeEventListener('mouseout', changeOpacityToOne);
            }
        });

        const bearsMarker = new H.map.DomMarker({ lat: -22.2154766, lng: -49.6538883 }, {
            icon: domIcon
        });
        map.addObject(bearsMarker);
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

        addDomMarker(hMap);

    }, [mapRef]);

    function modall() {
        return `
            <div style="width: 200px">
                <a href="https://www.fulltime.com.br" target="_black"> Fulltime </a>
                <p> seila.... deixa eu ver.....pera to pensando </p>
            </div>
        `;
    }

    return (
        <>
            <Menu />
            {modal && modall()}
            <ContainerMap className="map" ref={mapRef}>

            </ContainerMap>
        </>
    );
};

export default Map3;