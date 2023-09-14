import { atom, selector } from "recoil";

const defaultValue = JSON.parse(localStorage.getItem("cart")) || [];

export const cartState = atom({
  key: "cartState",
  default: defaultValue,
});

export const cartPopup = atom({
  key: "cartPopup",
  default: false,
});

export const cartPopupData = atom({
  key: "cartPopupData",
  default: {},
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },
});

export const addToCart = (cart, data) => {
  const newCart = [...cart];
  const foundIndex = cart.findIndex(
    (x) =>
      x.product._id === data?.product._id &&
      x.color === data?.color &&
      x.size === data?.size
  );

  // Increase quantity if existing
  if (foundIndex >= 0) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantity: cart[foundIndex].quantity + data.quantity,
    };
    return newCart;
  }

  // Add new item
  newCart.push(data);
  return newCart;
};
