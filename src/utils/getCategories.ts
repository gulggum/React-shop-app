import { Product } from "../api/fetchProducts";

const getCategories = (products: Product[]) => {
  //reducer로 카테고리별 배열 만들기
  const categoriesReduce = products?.reduce<string[]>((acc, curr) => {
    if (!acc.includes(curr.category)) {
      acc.push(curr.category);
    }
    return acc;
  }, []);
  //"men's clothing"과 "women's clothing"을 "clothing"으로 합치기
  const normalizedCategories = categoriesReduce?.map((cat) =>
    cat.includes("clothing") ? "clothing" : cat
  );
  //중복제거(Set 사용)
  const categories = Array.from(new Set(normalizedCategories));
  return categories;
};
export default getCategories;
