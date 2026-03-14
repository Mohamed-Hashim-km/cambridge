'use client';

import { GoogleMap, LoadScript, Circle, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const LOCATIONS = [
  { id: 100, lat: 12.844774854010407, lng: 75.07130821231064 },
  { id: 101, lat: 12.851351069014475, lng: 75.00883750893504 },
  { id: 102, lat: 12.901486321309694, lng: 75.04150879544346 },
  { id: 103, lat: 12.882156363478204, lng: 75.03050125311479 },
  { id: 104, lat: 12.795573953754454, lng: 74.85479072521217 },
  { id: 105, lat: 12.92532166130058, lng: 74.83907947401185 },
  { id: 106, lat: 12.882739262990897, lng: 74.83944018195062 },
];

interface StyledMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  allowedPoints?: number[];
  mainMarkerPosition?: { lat: number; lng: number };
  customMarkerImage?: string;
  // Add hover state props
  hoveredPoint?: number | null;
  setHoveredPoint?: (id: number | null) => void;
}

export default function StyledMap({
  center,
  zoom,
  allowedPoints,
  mainMarkerPosition,
  customMarkerImage = "/svgs/location.svg",
  hoveredPoint,
  setHoveredPoint,
}: StyledMapProps) {

  const mapOptions = useMemo(() => ({
    styles: [
      { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#e2e2e2" }] },
      { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#d1d1d1" }] },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      { featureType: "transit", stylers: [{ visibility: "off" }] },
      { featureType: "administrative", stylers: [{ visibility: "off" }] },
    ],
    disableDefaultUI: true,
    gestureHandling: "none", 
  }), []);
const handleMarkerClick = (lat: number, lng: number) => {
  const url = `https://www.google.com/maps?q=${lat},${lng}`;
  window.open(url, "_blank");
};
  return (
    <div className="h-full w-full">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoom}
          options={mapOptions}
        >
          {mainMarkerPosition && (
            <Marker 
            onClick={() =>
    handleMarkerClick(mainMarkerPosition.lat, mainMarkerPosition.lng)
  }
              position={mainMarkerPosition} 
              icon={({ 
                url: customMarkerImage, 
                scaledSize: { width: 40, height: 40 },
                anchor: { x: 20, y: 40 }
              }) as any} 
            />
          )}

          {LOCATIONS.map((loc) => {
            if (allowedPoints && !allowedPoints.includes(loc.id)) return null;

            const isHovered = hoveredPoint === loc.id;

            return (
              <Circle
                key={loc.id}
                center={{ lat: loc.lat, lng: loc.lng }}
                // Scale up by 10% (300 -> 330) when hovered
                radius={isHovered ? 370 : 300} 
                // Handle map dot hover
                onMouseOver={() => setHoveredPoint?.(loc.id)}
                onMouseOut={() => setHoveredPoint?.(null)}
                options={{
                  fillColor: '#E31C22',
                  fillOpacity: 1,
                  strokeWeight: 0,
                  clickable: true, // Required to detect mouseOver/mouseOut events
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}