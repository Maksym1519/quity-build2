const getUpdatedCart = (storedCart, newItems) => {
  let cart = [];

  try {
    // Если в localStorage уже есть корзина, загружаем ее
    cart = storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error parsing stored cart:", error);
    // Можно предпринять какие-то дополнительные действия при ошибке парсинга, если необходимо
  }

  // Проходим по товарам, которые нужно добавить в корзину
  newItems.forEach((newItem) => {
    // Проверяем, есть ли такой товар уже в корзине
    const existingItem = cart.find((item) => item.id === newItem.id);

    if (existingItem) {
      // Если товар уже есть, обновляем количество
      existingItem.quantity += newItem.quantity;
    } else {
      // Если товара нет, добавляем его в корзину
      cart.push({ ...newItem });
    }
  });

  // Сохраняем обновленную корзину в localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Возвращаем обновленную корзину
  return cart;
};

export default getUpdatedCart;
