export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res) throw new Error("응답이 정상적이지 않습니다.");
    const products = await res.json();
    return products;
  } catch (error) {
    throw new Error(`상품데이터를 불러오지 못했습니다."${error}`);
  }
};
