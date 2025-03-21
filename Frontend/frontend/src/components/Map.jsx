import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { useNavigate } from "react-router-dom";

// TopoJSON file for India map
const INDIA_TOPO_JSON = "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@dc5d493/topojson/india.json";

const Map = () => {
    const [hoveredState, setHoveredState] = useState(null);
    const navigate = useNavigate();

    const handleStateClick = (stateName) => {
        console.log(`Redirecting from ${stateName}`);
        navigate(`/state/${stateName.toLowerCase().replace(/\s+/g, "-")}`);
    };

    return (
        <div className="map-container" style={{ position: "relative", width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>India Map</h1>
            {hoveredState && (
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        backgroundColor: "white",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                        zIndex: 10,
                        fontWeight: "bold",
                    }}
                >
                    {hoveredState}
                </div>
            )}
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [78.9629, 22.5937] // Centered on India
                }}
                width={1000}
                height={800}
                style={{ width: "100%", height: "auto" }}
            >
                <ZoomableGroup>
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
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.5,
                                                outline: "none",
                                            },
                                            hover: {
                                                fill: "#F53",
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.5,
                                                outline: "none",
                                                cursor: "pointer",
                                            },
                                            pressed: {
                                                fill: "#E42",
                                                stroke: "#FFFFFF",
                                                strokeWidth: 0.5,
                                                outline: "none",
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default Map;