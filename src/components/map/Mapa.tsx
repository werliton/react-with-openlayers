import React, { useEffect, useRef } from "react";
import { Map, MapBrowserEvent } from "ol";
import { view } from "./views/Views";
import { layers } from "./layers/Layers";
import { defaults } from "ol/control";

const Mapa: React.FC = () => {
  const [map, setMap] = React.useState<Map>();

  const mapRef = useRef<any>();
  const infoRef = useRef<any>();

  // mapRef.current = map

  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current,
      layers: layers,
      view: view,
      controls: defaults({
        attributionOptions: {
          collapsible: false,
        },
      }),
    });

    mapInstance.on("click", handleClick);

    setMap(mapInstance);
  }, []);

  const handleClick = (e: MapBrowserEvent) => {
    const feature = map?.forEachFeatureAtPixel(e.pixel, (feat) => feat);

    infoRef.current = feature ? feature.get("title") : "";
  };

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
