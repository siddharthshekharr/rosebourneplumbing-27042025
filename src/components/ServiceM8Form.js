'use client'

import { useState, useEffect, useRef } from 'react'

export default function ServiceM8Form({ uuid }) {
  const [iframeHeight, setIframeHeight] = useState(1500) // Start with an even taller default height
  const [isLoading, setIsLoading] = useState(true)
  const [loadRetries, setLoadRetries] = useState(0)
  const iframeRef = useRef(null)
  const containerRef = useRef(null)

  // Force loading to complete after a timeout
  useEffect(() => {
    const forceLoadingComplete = setTimeout(() => {
      if (isLoading) {
        console.log('Force completing loading after timeout')
        setIsLoading(false)
        
        // Also adjust height to ensure content is visible
        setIframeHeight(2000)
      }
    }, 10000) // 10 seconds timeout
    
    return () => clearTimeout(forceLoadingComplete)
  }, [isLoading])

  useEffect(() => {
    // Function to handle messages from the iframe for resizing
    const handleMessage = (event) => {
      // Accept messages from ServiceM8 domains
      if (
        event.origin.includes('servicem8.com') || 
        event.origin.includes('book.servicem8.com')
      ) {
        console.log('Received message from ServiceM8:', event.data)
        
        // Handle height message
        if (event.data && typeof event.data === 'object' && event.data.height) {
          // Add moderate extra padding (150px) to ensure bottom content is visible
          const newHeight = parseInt(event.data.height) + 150
          console.log(`Adjusting iframe height to ${newHeight}px`)
          setIframeHeight(newHeight)
          
          // If we're getting height messages, the form is loaded
          if (isLoading) {
            setIsLoading(false)
          }
        }
      }
    }

    // Function to handle window resize events
    const handleResize = () => {
      if (containerRef.current && iframeRef.current) {
        // Get container width and set iframe width accordingly
        const width = containerRef.current.clientWidth
        iframeRef.current.style.width = `${width}px`
      }
    }

    // Fallback height adjustment in case message event doesn't work properly
    const checkIframeContent = () => {
      if (isLoading && loadRetries < 5) {
        // If still loading, try to reload the iframe
        setLoadRetries(prev => prev + 1)
        
        if (iframeRef.current) {
          // Refresh the iframe
          const src = iframeRef.current.src
          iframeRef.current.src = src
        }
      }
      
      try {
        if (iframeRef.current && iframeRef.current.contentWindow) {
          // If we can't resize based on messages, gradually increase height
          if (iframeHeight < 3000) {
            setIframeHeight(prev => prev + 100)
          }
        }
      } catch (e) {
        // Silent catch for cross-origin issues
        console.log("Height adjustment via content check failed - using default padding")
      }
    }

    // Add event listeners
    window.addEventListener('message', handleMessage)
    window.addEventListener('resize', handleResize)
    
    // Set periodic check for iframe height
    const intervalId = setInterval(checkIframeContent, 5000)
    
    // Initial resize
    handleResize()

    // Clean up event listeners and interval
    return () => {
      window.removeEventListener('message', handleMessage)
      window.removeEventListener('resize', handleResize)
      clearInterval(intervalId)
    }
  }, [iframeHeight, isLoading, loadRetries])

  const handleIframeLoad = () => {
    console.log('Iframe loaded event triggered')
    
    // Initial height boost after loading
    setIframeHeight(prev => Math.max(prev, 1500))
    
    // When isLoading is set to false depends on events, time, or load events
    setTimeout(() => {
      if (isLoading) {
        console.log('Setting loading to false after load event')
        setIsLoading(false)
      }
    }, 2000)
  }

  // Create a unique URL with cache-busting to prevent loading issues
  const bookingUrl = `https://book.servicem8.com/request_booking?uuid=${uuid}&t=${Date.now()}`

  return (
    <div 
      ref={containerRef}
      className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white transition-all duration-300 mb-6"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mb-4"></div>
            <p className="text-gray-600">Loading booking form...</p>
            <p className="text-gray-400 text-sm mt-1">This may take a few seconds</p>
            {loadRetries > 0 && (
              <button 
                onClick={() => {
                  if (iframeRef.current) {
                    const src = iframeRef.current.src
                    iframeRef.current.src = src.includes('t=') 
                      ? src.replace(/t=\d+/, `t=${Date.now()}`)
                      : `${src}&t=${Date.now()}`
                  }
                  setLoadRetries(prev => prev + 1)
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Reload Form
              </button>
            )}
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={bookingUrl}
        style={{
          height: `${iframeHeight}px`,
          width: '100%',
          border: 'none',
          display: 'block',
          transition: 'height 0.5s ease',
          maxHeight: '4000px',
          minHeight: '1500px',
        }}
        onLoad={handleIframeLoad}
        title="ServiceM8 Booking Form"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone; payment; fullscreen"
        referrerPolicy="no-referrer-when-downgrade"
        loading="eager"
        scrolling="no"
        frameBorder="0"
        importance="high"
      ></iframe>
      
      {/* Reduced footer padding from 32px to 12px */}
      <div className="h-12"></div>
    </div>
  )
} 