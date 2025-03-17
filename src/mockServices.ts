import Service from "./types/Service";

const services: Service[] = [
  {
    id: 1,
    name: "Növényállapot felmérés",
    description: "stressztérkép, NDVI térkép",
    img: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: {
      priceFor10: 20000,
      priceFor20: 25000,
      priceFor50: 45000,
      priceFor100: 80000,
      priceForMoreThan200: 150000,
      showUpPrice: 15000,
    },
  },
  {
    id: 2,
    name: "Kárfelmérés",
    description: "pl.: vadkár, belvíz",
    img: "https://images.unsplash.com/photo-1568911105565-aeda96582410?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: {
      priceFor10: 50000,
      priceFor20: 85000,
      priceFor50: 165000,
      priceFor100: 250000,
      priceForMoreThan200: 450000,
      showUpPrice: 15000,
    },
  },
];

export default services;
