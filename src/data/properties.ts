import prop1 from "@/assets/prop-1.jpg";
import prop2 from "@/assets/prop-2.jpg";
import prop3 from "@/assets/prop-3.jpg";
import prop4 from "@/assets/prop-4.jpg";
import prop5 from "@/assets/prop-5.jpg";
import prop6 from "@/assets/prop-6.jpg";

export type Property = {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  city: string;
  area: string;
  type: "House" | "Apartment" | "Plot" | "Commercial";
  purpose: "Buy" | "Sell";
  beds: number;
  baths: number;
  size: string;
  image: string;
  description: string;
  features: string[];
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern 5 Marla House",
    price: "PKR 2.85 Crore",
    priceValue: 28500000,
    city: "Lahore",
    area: "DHA Phase 6",
    type: "House",
    purpose: "Buy",
    beds: 4,
    baths: 5,
    size: "5 Marla",
    image: prop1,
    description:
      "Contemporary double-story house in a prime DHA location with elegant interiors, modern kitchen, and a beautifully landscaped lawn.",
    features: ["Servant Quarter", "Car Porch", "Modular Kitchen", "Marble Flooring", "Central Heating"],
  },
  {
    id: "2",
    title: "Luxury 3-Bed Apartment",
    price: "PKR 4.20 Crore",
    priceValue: 42000000,
    city: "Islamabad",
    area: "F-11 Markaz",
    type: "Apartment",
    purpose: "Buy",
    beds: 3,
    baths: 4,
    size: "2,400 sq ft",
    image: prop2,
    description:
      "Premium high-rise apartment with skyline views, dedicated parking, 24/7 security and a clubhouse with gym & pool access.",
    features: ["Gym", "Pool", "24/7 Security", "Backup Power", "Elevator"],
  },
  {
    id: "3",
    title: "1 Kanal Designer Villa",
    price: "PKR 9.50 Crore",
    priceValue: 95000000,
    city: "Lahore",
    area: "DHA Phase 8",
    type: "House",
    purpose: "Buy",
    beds: 6,
    baths: 7,
    size: "1 Kanal",
    image: prop3,
    description:
      "Architecturally crafted villa with double-height lobby, home theater, smart-home automation, and a private terrace garden.",
    features: ["Home Theater", "Smart Home", "Basement", "Lawn", "Solar Panels"],
  },
  {
    id: "4",
    title: "Premium Commercial Plaza",
    price: "PKR 18.75 Crore",
    priceValue: 187500000,
    city: "Karachi",
    area: "Clifton Block 4",
    type: "Commercial",
    purpose: "Sell",
    beds: 0,
    baths: 6,
    size: "12,000 sq ft",
    image: prop4,
    description:
      "Corner-location commercial plaza with high foot traffic, large ground-floor showroom, three upper floors and rooftop signage rights.",
    features: ["Corner Plot", "Showroom", "Lift", "Backup Generator", "Ample Parking"],
  },
  {
    id: "5",
    title: "10 Marla Townhouse",
    price: "PKR 3.65 Crore",
    priceValue: 36500000,
    city: "Rawalpindi",
    area: "Bahria Town Phase 7",
    type: "House",
    purpose: "Buy",
    beds: 5,
    baths: 6,
    size: "10 Marla",
    image: prop5,
    description:
      "Family-friendly townhouse with stone façade, spacious bedrooms, drawing & dining hall, and a private rooftop terrace.",
    features: ["Terrace", "Drawing Hall", "Store Room", "Wardrobes", "Tiled Bathrooms"],
  },
  {
    id: "6",
    title: "1 Kanal Residential Plot",
    price: "PKR 1.95 Crore",
    priceValue: 19500000,
    city: "Multan",
    area: "DHA Sector V",
    type: "Plot",
    purpose: "Buy",
    beds: 0,
    baths: 0,
    size: "1 Kanal",
    image: prop6,
    description:
      "Possession-ready 1 kanal plot in a well-developed DHA sector with all utilities, paved roads and parks nearby.",
    features: ["Possession Ready", "Paved Road", "All Utilities", "Park Facing", "Corner"],
  },
];

export const cities = ["All Cities", "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan", "Faisalabad"];
export const propertyTypes = ["All Types", "House", "Apartment", "Plot", "Commercial"];