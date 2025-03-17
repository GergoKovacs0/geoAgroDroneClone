type Service = {
  id: number;
  name: string;
  description: string;
  img: string;
  price: {
    priceFor10: number;
    priceFor20: number;
    priceFor50: number;
    priceFor100: number;
    priceForMoreThan200: number;
    showUpPrice: number;
  };
};

export default Service;
