import { useState } from "react";

import flightsFA from "../assets/13May_Flights_FA.png";
import arkFlyer from "../assets/Ark@Gambas_A5flyer.jpg";
import arkAdPage from "../assets/ARK-GAMBAS_FA5-ad.jpg";
import bdcPoster from "../assets/BDC_LaunchPoster.jpg";
import colliersPresentation from "../assets/colliers-presentation.png";
import gtBrochure from "../assets/gt-corporate-brochure.png";
import printAd from "../assets/Print-Ad-RM.jpg";
import gtInfographics from "../assets/gt-infographics.png";
import nzGd from "../assets/NZ-gd.jpg";
import mailchimp from "../assets/edm-gt-mailchimp.png";
import eventLogo from "../assets/event-logos.png";

const collierImages = [
  {
    id: 1,
    src: flightsFA,
    alt: "May 12 Flights Print Ad",
  },
  {
    id: 2,
    src: arkFlyer,
    alt: "Ark @ Gambas A5 Flyer",
  },
  {
    id: 3,
    src: arkAdPage,
    alt: "Ark @ Gambas A5 Advertisement Page",
  },
  {
    id: 4,
    src: bdcPoster,
    alt: "Business Development Center Launch Poster",
  },
  {
    id: 5,
    src: colliersPresentation,
    alt: "Colliers Presentation Slides",
  },
];

const travelImages = [
  {
    id: 6,
    src: gtBrochure,
    alt: "Global Travel Corporate Brochure",
  },
  {
    id: 7,
    src: gtInfographics,
    alt: "Global Travel Infographics for Sales Enablement",
  },
  {
    id: 8,
    src: printAd,
    alt: "Rocky Mountaineer Print Ad",
  },
  {
    id: 9,
    src: nzGd,
    alt: "New Zealand Getaway Google Ads",
  },
  {
    id: 10,
    src: mailchimp,
    alt: "eDM for Global Travel sent via Mailchimp",
  },
  {
    id: 11,
    src: eventLogo,
    alt: "Event Logos for Global Travel's 2024 Events Initiatives",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderSection = (title, images) => (
    <div className="mb-16" id="gallery">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-105 transition"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-left text-4xl font-bold">Gallery</h1>
        {renderSection("Colliers", collierImages)}
        {renderSection("Global Travel", travelImages)}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-3 -top-3 rounded-full bg-white px-3 py-1 text-lg font-bold text-black shadow"
              onClick={closeModal}
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-full rounded-lg object-contain"
            />

            <p className="mt-3 text-center text-white">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
