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
import socmedCAG from "../assets/thisthat-CAG.png";
import webAssets from "../assets/web-assets-CAG.png";
import thisthat from "../assets/this-that.mp4";
import nursingUNA from "../assets/yearsofnursingUNA.png";
import newSole from "../assets/newsolePersonal.png";
import christTheWay from "../assets/ctw.png";
import energyStar from "../assets/energyRebate-theBrick.png";
import wineSpirit from "../assets/wineSpiritCAG.png";
import nursesWarriors from "../assets/Nurses-Frontline-Warriors.mov";
import respectRetainRecruit from "../assets/RespectRetainRecruit.mov";
import nursesHeartbeat from "../assets/Nurses-Heartbeat.mov";
import unaGuidelines from "../assets/una-guidelines.png";
import emailtempalte from "../assets/email-template.png";

const unaWorks = [
  {
    id: 1,
    type: "video",
    src: nursesWarriors,
    title: "Nurses Frontline Warriors - Animated Reel",
    alt: "Social media video for the Respect, Retain, Recruit campaign, worked on the visual concept and storyboard based on a soundbite to highlight the importance of supporting nurses in Alberta.",
  },
  {
    id: 2,
    type: "video",
    title: "Respect, Retain, Recruit - Animated Reel",
    src: respectRetainRecruit,
    alt: "Social media video for the Respect, Retain, Recruit campaign, worked on the visual concept and storyboard based on a soundbite to highlight the importance of supporting nurses in Alberta.",
  },
  {
    id: 3,
    type: "video",
    src: nursesHeartbeat,
    title: "Nurses Heartbeat - Animated Reel",
    alt: "Social media video for the Respect, Retain, Recruit campaign, worked on the visual concept and storyboard based on a soundbite to highlight the importance of supporting nurses in Alberta.",
  },
  {
    id: 4,
    src: unaGuidelines,
    url: "https://www.una.ca/document/unalogo",
    title: "Logo Guidelines for United Nurses of Alberta",
    alt: "Informative infographic outlining the guidelines for the United Nurses of Alberta's Respect, Retain, Recruit campaign to encourage support for nurses in Alberta",
  },
];

const collierImages = [
  {
    id: 1,
    src: flightsFA,
    title: "May 12 Flights Black and White Print Advertisement",
    alt: "May 12 Flights Print Ad as advertised in Straits Times Singapore",
  },
  {
    id: 2,
    src: arkFlyer,
    title: "Industrial Real Estate A5 Flyer",
    alt: "Ark @ Gambas A5 Flyer distributed to residents in the vicinity of Ark @ Gambas and Gambas Crescent, Singapore",
  },
  {
    id: 3,
    src: arkAdPage,
    title: "Industrial Real Estate Full Colour Advertisement Page",
    alt: "Ark @ Gambas A5 Advertisement Page",
  },
  {
    id: 4,
    src: bdcPoster,
    title: "Business Development Center Launch Poster",
    alt: "Business Development Center Launch Poster posted internally in the office",
  },
  {
    id: 5,
    src: colliersPresentation,
    title: "Colliers Presentation Slide Deck",
    alt: "Colliers Presentation Slide Deck for Sales Enablement and Client Pitches",
  },
];

const cagImages = [
  {
    id: 1,
    src: socmedCAG,
    title: "This or That campaign - Animated Reel",
    alt: "Promotional Social Media Post called This or That for Wines and Spirits",
  },
  {
    id: 2,
    type: "video",
    src: thisthat,
    title: "This or That campaign - Animated Reel",
    alt: "Promotional Social Media Animation Story called This or That for Wines and Spirits",
  },
  {
    id: 3,
    src: webAssets,
    title: "High-Tech Fair Web Banners and Social Media Assets",
    alt: "Web banners and assets for High-Tech Fair campaign",
  },
];

const travelImages = [
  {
    id: 1,
    src: gtBrochure,
    title: "Global Travel Corporate Brochure",
    alt: "Global Travel Corporate Brochure distributed to clients and prospects",
  },
  {
    id: 2,
    src: gtInfographics,
    title: "Global Travel Infographics for Sales Enablement",
    alt: "Global Travel Infographics for Sales Enablement",
  },
  {
    id: 3,
    src: printAd,
    title: "Rocky Mountaineer Full ColourPrint Advertisement",
    alt: "Rocky Mountaineer Print Advertisement posted in Straits Times Singapore",
  },
  {
    id: 4,
    src: nzGd,
    title: "New Zealand Getaway Google Display Banner",
    alt: "New Zealand Getaway Google Display Banner for Scenic Travel's Hurtigruten Campaign",
  },
  {
    id: 5,
    src: mailchimp,
    title: "Global Travel Email Marketing Campaign",
    alt: "eDM for Global Travel sent via Mailchimp",
  },
  {
    id: 6,
    src: eventLogo,
    title: "Global Travel Event Logos",
    alt: "Event Logos for Global Travel's 2024 Events Initiatives",
  },
];

const websitePortfolio = [
  {
    id: 1,
    src: nursingUNA,
    url: "https://github.com/francesjgonzales/100yearsofnursing",
    alt: "Informative website about the history of nursing in Alberta",
    title: "100 Years of Nursing in Alberta - Informative Website",
  },
  {
    id: 2,
    src: newSole,
    url: "https://newsole2.onrender.com/",
    alt: "A personal website centered on building an eCommerce store for a shoe brand called New Sole",
    title: "New Sole - Personal eCommerce Website",
  },
  {
    id: 3,
    src: christTheWay,
    url: "https://christthewayadventist.ca/",
    alt: "A freelance project for a church website called Christ The Way, built to enhance the user experience by engaging visitors to explore the church's facility rentals, offerings and events",
    title: "Christ The Way - Church Website",
  },
];

const uxui = [
  {
    id: 1,
    src: energyStar,
    url: "https://www.notion.so/ENERGY-STAR-Rebate-Landing-Page-3677e80886ca801d8991ff28b5d38f91?pvs=28",
    alt: "Informative website about the history of nursing in Alberta",
    title:
      "UX Content Strategy and Wireframes for ENERGY STAR Rebate Landing Page",
  },
  {
    id: 2,
    src: wineSpirit,
    url: "https://www.notion.so/Wines-and-Spirit-Visual-Merchandise-enhancement-3677e80886ca807cb2fcf5256c000212?source=copy_link",
    alt: "iShopChangi UX Research on Wines & Spirits",
    title:
      "UX Research and Visual Merchandising Enhancement for iShopChangi's Wines & Spirits Category",
  },
  {
    id: 3,
    src: emailtempalte,
    url: "https://www.figma.com/proto/MsD2qFxhmXgXZg284MwrwJ/The-Brick---Email-Template?node-id=2-590&viewport=752%2C-130%2C0.02&t=GwvjWzoYMZDnwSjj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A590&page-id=0%3A1",
    alt: "Email Template for The Brick's eDM Campaigns",
    title: "Email Template Design for The Brick's eDM Campaigns",
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
            className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-105 transition p-4"
            onClick={() => setSelectedImage(image)}
          >
            {image.type === "video" ? (
              <video className="h-64 w-full object-cover" muted playsInline>
                <source src={image.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover"
              />
            )}
            <p className="mb-6 text-lg font-medium pt-5">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-left text-4xl font-bold">Works</h1>
        {renderSection("UX UI Design", uxui)}
        {renderSection("Website Design", websitePortfolio)}
        {renderSection("United Nurses of Alberta", unaWorks)}
        {renderSection("Changi Airport Group", cagImages)}
        {renderSection("Global Travel", travelImages)}
        {renderSection("Colliers International", collierImages)}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
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

            {selectedImage.type === "video" ? (
              <video
                controls
                autoPlay
                className="max-h-[80vh] w-full rounded-lg object-contain"
              >
                <source src={selectedImage.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <a
                href={selectedImage.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] w-full rounded-lg object-contain"
                />
              </a>
            )}

            <p className="mt-3 text-center text-white">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
