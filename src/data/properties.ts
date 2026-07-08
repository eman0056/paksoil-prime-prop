import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import paintService from "@/assets/rroUd.jpg";

const img1 = prop6;
const img2 = prop1;
const img3 = paintService;
const img4 = heroVilla;
const img5 = prop4;

export type Property = {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  city: string;
  area: string;
  type: "Plot";
  purpose: "Buy";
  beds: number;
  baths: number;
  size: string;
  image: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "peace-3-5-marla",
    title: "Peace Valley 3.5 Marla Plot",
    price: "PKR 5,50,000/-",
    priceValue: 550000,
    city: "Islamabad",
    area: "Peace Valley",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "3.5 Marla",
    image: prop1,
    description: "Residential plot in Peace Valley, Islamabad region.",
    features: [],
  },
  {
    id: "peace-5-marla",
    title: "Peace Valley 5 Marla Plot",
    price: "PKR 7,50,000/-",
    priceValue: 750000,
    city: "Islamabad",
    area: "Peace Valley",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "5 Marla",
    image: prop2,
    description: "Residential plot in Peace Valley, Islamabad region.",
    features: [],
  },
  {
    id: "peace-7-marla",
    title: "Peace Valley 7 Marla Plot",
    price: "PKR 10,50,000/-",
    priceValue: 1050000,
    city: "Islamabad",
    area: "Peace Valley",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "7 Marla",
    image: prop3,
    description: "Residential plot in Peace Valley, Islamabad region.",
    features: [],
  },
  {
    id: "peace-10-marla",
    title: "Peace Valley 10 Marla Plot",
    price: "PKR 14,50,000/-",
    priceValue: 1450000,
    city: "Islamabad",
    area: "Peace Valley",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "10 Marla",
    image: prop4,
    description: "Residential plot in Peace Valley, Islamabad region.",
    features: [],
  },
  {
    id: "peace-1-kanal",
    title: "Peace Valley 1 Kanal Plot",
    price: "PKR 25,00,000/-",
    priceValue: 2500000,
    city: "Islamabad",
    area: "Peace Valley",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "1 Kanal",
    image: prop5,
    description: "Residential plot in Peace Valley, Islamabad region.",
    features: [],
  },
  {
    id: "overseas-connecting-dreams",
    title: "Overseas Premium Housing Option",
    price: "Call for Price",
    priceValue: 0,
    city: "Islamabad",
    area: "Overseas Sales Wing",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "Flexible Allocation",
    image: img1,
    description:
      "Connecting Overseas Dreams to Reality: Affordable, premium housing solutions designed for Pakistani families abroad to build a secure future back home safely.",
    features: ["Overseas Sales", "Secure Investment", "Portfolio Management"],
  },
  {
    id: "prime-residential-developed-plots",
    title: "Prime Residential Developed Plots",
    price: "PKR 5,50,000/-",
    priceValue: 550000,
    city: "Islamabad",
    area: "Peace Valley",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "5 Marla",
    image: img2,
    description:
      "Prime Residential Plots: Fully developed, high-yield land options featuring wide carpeted roads and standard community layouts ready for immediate construction.",
    features: ["Carpeted Roads", "Immediate Construction", "Developed Land"],
  },
  {
    id: "premium-painting-maintenance-services",
    title: "Premium Interior & Exterior Paint Service",
    price: "On-Demand Quote",
    priceValue: 0,
    city: "Islamabad",
    area: "All Pakistan Coverage",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "Full Structure Execution",
    image: img3,
    description:
      "Professional Painting Services: Comprehensive commercial and residential interior-exterior paint solutions delivered by Paksoils Developers' expert engineering teams.",
    features: ["Building Maintenance", "24/7 Solutions", "Expert Painters"],
  },
  {
    id: "modern-turnkey-luxury-villas",
    title: "Modern Turnkey Luxury Villa",
    price: "Premium Pricing",
    priceValue: 15000000,
    city: "Islamabad",
    area: "Paksoils Phase 1",
    type: "Plot",
    purpose: "Buy",
    beds: 4,
    baths: 5,
    size: "1 Kanal",
    image: img4,
    description:
      "Modern Turnkey Luxury Villas: Forward-thinking architectural setups with clean structural layouts, premium exterior elevations, and custom glass architecture.",
    features: ["Turnkey Construction", "Glass Architecture", "Modern Layout"],
  },
  {
    id: "bespoke-luxury-finishing-interior-design",
    title: "Bespoke Luxury Finishing & Interior Design",
    price: "Custom Package",
    priceValue: 0,
    city: "Islamabad",
    area: "Luxury Execution Wing",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "Premium Executions",
    image: img5,
    description:
      "Premium Finishing & Interior Design: Elevating living spaces with modern false ceiling layouts, integrated linear LED strip lighting, luxury chandeliers, and bespoke woodwork panels.",
    features: ["LED Linear Lighting", "Bespoke Woodwork", "Premium Ceiling"],
  },
];

export const cities = [
  "All Cities",
  "Islamabad",
  "Rawalpindi",
  "Lahore",
  "Karachi",
  "Peshawar",
  "Multan",
  "Faisalabad",
  "Quetta",
  "Gujranwala",
  "Sialkot",
  "Bahawalpur",
];
export const propertyTypes = [
  "All Types",
  "Plot",
  "House",
  "Villa",
  "Apartment",
  "Farmhouse",
  "Commercial",
  "Office",
  "Shop",
  "Warehouse",
  "Agricultural Land",
];
