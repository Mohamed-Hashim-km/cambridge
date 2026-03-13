'use client';

import StyledMap from '../ui/StyledMap';

export interface MapSectionData {
    key: string;
    title: string;
    points: number[];
    viewport: {
        center: { lat: number; lng: number };
        zoom: number;
    };
}

export interface MapSectionProps {
    data: MapSectionData[];
    mainMarkerPosition?: { lat: number; lng: number };
    customMarkerImage?: string;
    title?: string;
}

export default function MapSection({ 
    data, 
    mainMarkerPosition, 
    customMarkerImage,
    title = "Transport Routes across all parts of Mangalore" 
}: MapSectionProps) {
    // We pass all points as "active" so they are always visible
    const allPoints = data.map(item => item.points[0]);

    if (!data || data.length === 0) return null;

    return (
        <section className="relative md:h-screen h-[80vh] w-full bg-[#EAEAEA] overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <StyledMap
                    // Map stays fixed (no panning/zooming on click)
                    center={data[0].viewport.center}
                    zoom={data[0].viewport.zoom}
                    allowedPoints={allPoints}
                    mainMarkerPosition={mainMarkerPosition}
                    customMarkerImage={customMarkerImage}
                />
            </div>

            {/* DESKTOP OVERLAY */}
            <div className="hidden lg:flex absolute z-10 top-1/2 left-[8%] -translate-y-1/2">
                <div className="bg-white p-10 rounded-xl shadow-xl w-[500px]">
                    <h2 className="text-[28px] font-bold mb-6 text-[#191919] leading-tight">
                        {title}
                    </h2>

                    <div className="space-y-4">
                        {data.map((item) => (
                            <div
                                key={item.key}
                                className="w-full text-left text-[20px] text-[#2b2b2b]"
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* MOBILE OVERLAY */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white p-8 rounded-t-[32px] z-20">
                <h2 className="text-2xl font-bold mb-6 text-[#191919] leading-tight">
                    {title}
                </h2>
                 <div className="flex flex-col space-y-4 max-h-[40vh] overflow-y-auto">
                    {data.map((item) => (
                        <div
                            key={item.key}
                            className="text-[18px] text-[#2b2b2b]"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}