import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useNavigate } from "react-router-dom";

// TopoJSON file for India map
const INDIA_TOPO_JSON = "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.json'";

const Map = () => {
    const [hoveredState, setHoveredState] = useState(null);
    const navigate = useNavigate();

    const handleStateClick = (stateName) => {
        console.log(`Redirecting from ${stateName}`);
        navigate("/default-page"); // Replace with your desired route
    };

    return (
        <div style={{ position: "relative" }}>
            <h1>India Map</h1>
            {hoveredState && (
                <div
                    style={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        backgroundColor: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                    }}
                >
                    {hoveredState}
                </div>
            )}
            <ComposableMap projection="geoMercator" width={800} height={600}>
                <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const stateName = geo.properties.st_nm; // State name from TopoJSON
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => setHoveredState(stateName)}
                                    onMouseLeave={() => setHoveredState(null)}
                                    onClick={() => handleStateClick(stateName)}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none",
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none",
                                        },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default Map;