import { persist } from "zustand/middleware";
import { create } from "zustand/react";

export interface CartItem {
  id: number;
  image: string;
  price: number;
  title: string;
  quantity: number;
  category: string;
}
//장바구니,상품추가,상품제거,수량증가,수량감소
interface CartStore {
  items: CartItem[];
  addCart: (item: Omit<CartItem, "quantity">) => void; //Omit<원본타입,"빼고싶은속성">
  removeItem: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [], //초기상태

      /**
       * 장바구니 담기
       * - 이미 있으면 quantity +1
       * - 없으면 새로 추가
       * state.items = 기존 장바구니 목록
       * product --> item
       */
      addCart: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (CartItem) => CartItem.id === item.id
          );
          console.log("item.id:", item.id); // 방금 클릭한 아이템
          console.log("state.items:", state.items); // 현재 장바구니 배열

          // 이미 있다면 수량만 증가
          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          // 없다면 새 아이템 추가 (quantity = 1)
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),

      /**
       * 상품 완전 삭제
       */
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      /**
       * 수량 증가
       */
      increase: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      /**
       * 수량 감소
       * - quantity가 1이면 제거
       */
      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);
