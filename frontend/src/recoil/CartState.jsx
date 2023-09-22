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

export const updateCart = (cart, idx, data) => {
  const newCart = [...cart];

  newCart[idx] = {
    ...cart[idx],
    ...data,
  };
  return newCart;
};

export const deleteCart = (cart, idex) => {
  // const newCart = [...cart];
  
  const newCart = cart.filter((cart, idx) => idx != idex);
  console.log(newCart)
  return newCart;
};

export const addItem = (cart, idx) => {
  const newCart = [...cart];
  newCart[idx] = {
    ...cart[idx],
    quantity: cart[idx].quantity + 1,
  };
  return newCart;
  // }
};

export const subItem = (cart, idx) => {
  const newCart = [...cart];
  newCart[idx] = {
    ...cart[idx],
    quantity: cart[idx].quantity - 1,
  };
  return newCart;
};
