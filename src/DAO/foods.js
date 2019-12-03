import foodsList from '../data/foods';

export const getFoods = (page = 1, pageSize = 8) => {
  const startIndex = page * pageSize - pageSize;
  return foodsList.slice(startIndex, page * pageSize);
};
