import restaurantsList from '../data/restaurants';

export const getRestaurants = (page = 1, pageSize = 6) => {
  const startIndex = page * pageSize - pageSize;

  return restaurantsList.slice(startIndex, page * pageSize);
};

export const findById = id => {
  return restaurantsList.find(item => item.id === id);
};

export const getRandomRestaurants = restaurantsAmount => {
  let restaurants = [];
  let newIndex = 0;
  let index = restaurantsList.length;

  while (restaurantsAmount > 0) {
    let randomIndex = Math.floor(Math.random() * index);

    if (restaurants.indexOf(restaurantsList[randomIndex]) === -1) {
      restaurants[newIndex] = restaurantsList[randomIndex];
      newIndex++;
      index--;
      restaurantsAmount--;
    }
  }

  return restaurants;
};
