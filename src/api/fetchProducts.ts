const FAKER_URL = "https://fakestoreapi.com/products";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(FAKER_URL);
    if (!res) throw new Error("응답이 정상적이지 않습니다.");
    const products = await res.json();
    return products;
  } catch (error) {
    throw new Error(`상품데이터를 불러오지 못했습니다."${error}`);
  }
};

export const fetchSingleProduct = async (id: string) => {
  try {
    const res = await fetch(`${FAKER_URL}/${id}`);
    const product = await res.json();
    return product;
  } catch (error) {
    throw new Error(`상품데이터를 불러오지 못했습니다."${error}`);
  }
};
