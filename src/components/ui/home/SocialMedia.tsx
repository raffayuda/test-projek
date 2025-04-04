"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, MoreVertical, X } from "lucide-react"
import Image from "next/image"

export default function SocialMediaGallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [showVideoControls, setShowVideoControls] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Sample gallery items with actual Box & Tale content
  const galleryItems = [
    {
      id: 1,
      image: "https://boxandtale.com/storage/instagram/485428815_18366042691192690_7479159957566150181_n.jpg.webp",
      type: "image",
      title: "Expat Gift Box",
      hasOverlay: true,
    },
    {
      id: 2,
      image: "https://boxandtale.com/storage/instagram/485910883_18366024967192690_8024050807003752206_n.jpg.webp",
      type: "image",
      title: "",
      subtitle: "",
      buttonText: false,
      hasOverlay: true,
      overlayPosition: "top",
      overlayTitle: "",
    },
    {
      id: 3,
      image: "/images/video1.png",
      video: "https://boxandtale.com/storage/instagram/AQNs-1CohRA-LiMla1LEZlVlwa8qLQcsAwvG9rJsNGgyT-aBT-B49ktz_4zWUvZY2Bs7SLO5yf_Cfph2NiLbTEtrgCPVtngGp-uFmDs.mp4",
      type: "video",
      title: "",
      hasOverlay: true,
    },
    {
      id: 4,
      image: "https://boxandtale.com/storage/instagram/485248830_18365789224192690_8380403865573822838_n.jpg.webp",
      type: "image",
      title: "",
      badge: false,
      hasOverlay: true,
      overlayPosition: "top",
      overlayTitle: "",
    },
    {
      id: 5,
      image: "/images/video2.png",
      video: "https://boxandtale.com/storage/instagram/AQMKIaXqJMyAsZk4XGTaSjFuG1de-Dh_HODEYUJ3tboAiuBa1Osz51joFjNFYO8OrWwkZpKgM0ZA2qXoWM838eCjwJwy5ktCddz62iU.mp4",
      type: "video",
      title: "",
      hasOverlay: true,
    },
    {
      id: 6,
      image: "https://boxandtale.com/storage/instagram/484837209_18364970203192690_8163667271683024912_n.jpg.webp",
      type: "image",
      title: "",
      badge: false,
      hasOverlay: true,
      overlayPosition: "top",
      overlayTitle: "",
    },
    {
      id: 7,
      image: "/images/video3.png",
      video: "https://boxandtale.com/storage/instagram/AQPrtBx9Uc_Jef6glq9ox-oJOWNy8r6lIjvDRCrDhnJFBAX2uXJpNNrNjdaAy0KOuRHssJTO11iOVYhRRKvoR6Ivpdu4RM8YPX1iH9Q.mp4",
      type: "video",
      title: "",
      hasOverlay: true,
    },
    {
      id: 8,
      image: "/images/video4.png",
      video: "https://boxandtale.com/storage/instagram/AQNhzchzhpaClochRTnrQpBWtgvYTGPvJhEIePzNNFt6KqAmYLbqgCTJMG-i7UUvSFoHDMqalO_FrPsagvzRGhPuesqjKgsmTeIyx_k.mp4",
      type: "video",
      title: "",
      hasOverlay: true,
    },
    
  ]

  // Handle video time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  // Handle video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  // Format time in MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Set playback speed
  const setPlaybackSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed
    }
    setShowVideoControls(false)
  }

  // Enable picture-in-picture mode
  const enablePictureInPicture = async () => {
    if (videoRef.current && document.pictureInPictureEnabled) {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture()
        } else {
          await videoRef.current.requestPictureInPicture()
        }
      } catch (error) {
        console.error("Picture-in-Picture failed:", error)
      }
    }
    setShowVideoControls(false)
  }

  // Handle seek on progress bar click
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget
      const rect = progressBar.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = pos * duration
    }
  }

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedItem(null)
      }
    }

    if (selectedItem !== null) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedItem])

  // Use placeholder images for development
  const getImageUrl = (item: any) => {
    // For real implementation, use the actual URLs
    return item.image || `/placeholder.svg?height=600&width=600`
  }

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[#e3deda]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">FOLLOW OUR SOCIAL MEDIA</h3>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">Custom Gift Hampers by Box & Tale</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden group cursor-pointer aspect-square"
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="w-full h-full relative">
                {/* Use placeholder images for development */}
                <img
                  src={getImageUrl(item) || "/placeholder.svg"}
                  alt={item.title}
                  
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Video play button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-30 rounded-full p-3">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                )}

                {/* Overlay content */}
                {item.hasOverlay && (
                  <div
                    className={`absolute inset-0 flex flex-col ${item.overlayPosition === "top" ? "justify-start pt-6" : "justify-end pb-6"} p-6 text-white`}
                  >
                    {item.overlayTitle && <div className="text-sm font-light mb-1">{item.overlayTitle}</div>}
                    <h3 className="text-2xl md:text-3xl font-serif mb-1">
                      {item.title.split(" ").length > 2 ? (
                        <>
                          {item.title.split(" ").slice(0, 2).join(" ")}
                          <br />
                          {item.title.split(" ").slice(2).join(" ")}
                        </>
                      ) : (
                        item.title
                      )}
                    </h3>
                    {item.subtitle && <p className="text-sm mt-1">{item.subtitle}</p>}
                    {item.buttonText && (
                      <button className="mt-3 bg-white bg-opacity-20 text-white text-xs py-1 px-3 rounded-full hover:bg-opacity-30 transition-all">
                        {item.buttonText}
                      </button>
                    )}
                  </div>
                )}

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-white rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs text-gray-800">
                      <span>Sold</span>
                      <span>Out</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected item */}
      {selectedItem !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-1"
            >
              <X className="h-6 w-6" />
            </button>

            {galleryItems.find((item) => item.id === selectedItem)?.type === "video" ? (
              <div className="relative">
                <video
                  ref={videoRef}
                  src={galleryItems.find((item) => item.id === selectedItem)?.video || ""}
                  className="w-full aspect-video object-contain"
                  controls={false}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={togglePlay}
                />

                {/* Custom video controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  {/* Progress bar */}
                  <div className="h-1 bg-gray-600 rounded-full mb-2 cursor-pointer" onClick={handleSeek}>
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center">
                    {/* Play/Pause button */}
                    <button onClick={togglePlay} className="text-white mr-3">
                      {isPlaying ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <rect x="6" y="4" width="4" height="16" fill="white" />
                          <rect x="14" y="4" width="4" height="16" fill="white" />
                        </svg>
                      ) : (
                        <Play className="h-6 w-6" fill="white" />
                      )}
                    </button>

                    {/* Time display */}
                    <div className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Video controls dropdown */}
                    <div className="relative">
                      <button onClick={() => setShowVideoControls(!showVideoControls)} className="text-white ml-3">
                        <MoreVertical className="h-5 w-5" />
                      </button>

                      {showVideoControls && (
                        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-md shadow-lg overflow-hidden">
                          <div className="w-48">
                            {/* Playback speed options */}
                            <div
                              className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                              onClick={() => setPlaybackSpeed(0.5)}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              <span>Playback speed: 0.5x</span>
                            </div>
                            <div
                              className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                              onClick={() => setPlaybackSpeed(1)}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              <span>Playback speed: 1x</span>
                            </div>
                            <div
                              className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                              onClick={() => setPlaybackSpeed(1.5)}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              <span>Playback speed: 1.5x</span>
                            </div>
                            <div
                              className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                              onClick={() => setPlaybackSpeed(2)}
                            >
                              <Play className="h-4 w-4 mr-2" />
                              <span>Playback speed: 2x</span>
                            </div>

                            {/* Picture in picture */}
                            <div
                              className="p-2 hover:bg-gray-100 flex items-center cursor-pointer"
                              onClick={enablePictureInPicture}
                            >
                              <svg
                                className="h-4 w-4 mr-2"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                <rect x="10" y="10" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
                              </svg>
                              <span>Picture in picture</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Simplified image display - just the image without additional controls
              <div className="relative">
                <Image
                  src={getImageUrl(galleryItems.find((item) => item.id === selectedItem)!) || "/placeholder.svg"}
                  alt={galleryItems.find((item) => item.id === selectedItem)?.title || ""}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            )}

            {/* Simple title for the modal */}
            <div className="p-4">
              <h3 className="text-xl font-medium">{galleryItems.find((item) => item.id === selectedItem)?.title}</h3>
              {galleryItems.find((item) => item.id === selectedItem)?.subtitle && (
                <p className="text-gray-600 mt-1">{galleryItems.find((item) => item.id === selectedItem)?.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

