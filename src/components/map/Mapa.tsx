import React, { useEffect, useRef } from "react";
import { Map } from "ol";
import { view } from "./views/Views";
import { layers } from "./layers/Layers";

import "ol/ol.css";
import controls from "./controls/Controls";
import interactions from "./interactions";

const Mapa: React.FC = () => {
  const [map, setMap] = React.useState<Map>();

  const mapRef = useRef<any>();
  const infoRef = useRef<any>();

  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current,
      layers,
      view,
      controls,
      interactions,
    });

    setMap(mapInstance);
  }, []);

  return (
    <>
      <div
        id="map"
        ref={mapRef}
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
      <div
        id="info"
        ref={infoRef}
        style={{
          width: "50%",
          height: 100,
          background: "#f5f5",
        }}
      ></div>
    </>
  );
};

export default Mapa;
