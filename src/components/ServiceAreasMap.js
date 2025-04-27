'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

// Updated locations to include all service areas with consistent data
const locations = [
    { 
        name: "Andover", 
        lat: 51.2080, 
        lng: -1.4945,
        postcodes: "SP10, SP11",
        areas: ["Upper Clatford", "Tidworth", "Ludgershall", "Shipton Bellinger"]
    },
    { 
        name: "Marlborough", 
        lat: 51.4196, 
        lng: -1.7285,
        postcodes: "SN8",
        areas: ["Great Bedwyn", "Ramsbury", "Aldbourne", "Burbage"]
    },
    { 
        name: "Hungerford", 
        lat: 51.4167, 
        lng: -1.5167,
        postcodes: "RG17",
        areas: ["Lambourn", "Great Shefford", "Chilton Foliat", "Inkpen"]
    }
]

export default function ServiceAreasMap() {
    const mapRef = useRef(null)

    useEffect(() => {
        const initMap = async () => {
            // Fallback when Google Maps API key is not available
            if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
                console.warn('Google Maps API key missing. Map will display fallback content.')
                // Add a simple fallback UI instead of the map
                if (mapRef.current) {
                    mapRef.current.innerHTML = `
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background-color: #f3f4f6; border-radius: 0.75rem; padding: 2rem;">
                            <svg style="width: 3rem; height: 3rem; color: #3b82f6; margin-bottom: 1rem;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <h3 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 0.5rem;">Service Area Map</h3>
                            <p style="text-align: center; color: #6b7280; max-width: 80%;">We serve Andover, Marlborough, Hungerford and surrounding areas.</p>
                        </div>
                    `;
                }
                return;
            }

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
                version: 'weekly',
                libraries: ['places', 'geometry']
            })

            try {
                const google = await loader.load()

                // Create the map
                const map = new google.maps.Map(mapRef.current, {
                    center: { lat: 51.3148, lng: -1.5945 }, // Centered between the service areas
                    zoom: 10,
                    styles: [
                        {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
                        },
                        {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
                        },
                        {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{ color: "#ffffff" }, { lightness: 17 }]
                        }
                    ]
                })

                // Create a single InfoWindow instance to reuse
                const infoWindow = new google.maps.InfoWindow()

                // Custom pin SVG icon
                const pinSVG = {
                    path: 'M12 0C7.31 0 3.5 3.81 3.5 8.5c0 5.02 6.73 12.87 7.97 14.25.28.31.74.31 1.02 0C13.73 21.37 20.5 13.52 20.5 8.5 20.5 3.81 16.69 0 12 0zm0 13c-2.49 0-4.5-2.01-4.5-4.5S9.51 4 12 4s4.5 2.01 4.5 4.5S14.49 13 12 13z',
                    fillColor: '#3b82f6', // Blue color to match site theme
                    fillOpacity: 1,
                    strokeWeight: 1,
                    strokeColor: '#ffffff',
                    scale: 1.5,
                    anchor: new google.maps.Point(12, 24),
                }

                // Add markers for each location
                locations.forEach(location => {
                    const marker = new google.maps.Marker({
                        position: { lat: location.lat, lng: location.lng },
                        map,
                        title: location.name,
                        icon: pinSVG,
                        animation: google.maps.Animation.DROP
                    })

                    // Create enhanced info window content with areas covered
                    marker.addListener("click", () => {
                        const areasList = location.areas.map(area => 
                            `<li style="margin-bottom: 4px; display: flex; align-items: center;">
                                <span style="display: inline-block; width: 6px; height: 6px; background-color: #3b82f6; border-radius: 50%; margin-right: 8px;"></span>
                                ${area}
                            </li>`
                        ).join('');

                        infoWindow.setContent(`
                            <div style="padding: 12px; max-width: 240px;">
                                <h3 style="font-weight: bold; color: #3b82f6; margin: 0 0 4px 0; font-size: 16px;">${location.name}</h3>
                                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px;">${location.postcodes}</p>
                                <p style="margin: 8px 0; font-weight: 500; color: #374151; font-size: 14px;">Areas covered:</p>
                                <ul style="margin: 0; padding: 0 0 0 4px; list-style: none; font-size: 13px; color: #4b5563;">
                                    ${areasList}
                                </ul>
                            </div>
                        `)
                        infoWindow.open(map, marker)
                    })
                })

            } catch (error) {
                console.error('Error loading Google Maps:', error)
            }
        }

        initMap()
    }, [])

    return (
        <div className="relative">
            <div ref={mapRef} className="w-full h-[600px] rounded-2xl overflow-hidden" />
            {/* Coverage Badge */}
            <div className="absolute bottom-8 left-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-blue-600">Service Areas</p>
                            <h4 className="text-2xl font-bold text-gray-900">Main Regions</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 