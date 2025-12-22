//router의 Link의 category사용시 활용
export const normalizeCategory = (cat: string) =>
  cat.includes("clothing") ? "clothing" : cat;
