import img1 from "../assets/img/slideshow/slider_1.webp";
import img2 from "../assets/img/slideshow/slider_2.webp";
import img3 from "../assets/img/slideshow/slider_3.webp";

const fadeImages = [img1, img2, img3];

const TYPE = [
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
  { value: "Kids", label: "Kids" },
];

const TRADEMARK = [
  { value: "Chanels", label: "Chanels" },
  { value: "Dior", label: "Dior" },
  { value: "Shein", label: "Shein" },
  { value: "Other", label: "Other" },
];

const CATEGORY = [
  { value: "T-shirt", label: "T-Shirt" },
  { value: "Jean", label: "Jean" },
  { value: "Dress", label: "Dress" },
  { value: "Shirt", label: "Shirt" },
  { value: "Other", label: "Other" },
];

const STYLE = [
  { value: "Boho", label: "Boho" },
  { value: "Casual", label: "Casual" },
  { value: "Cute", label: "Cute" },
  { value: "Elegant", label: "Elegant" },
  { value: "Fashionable", label: "Fashionable" },
  { value: "Party", label: "Party" },
  { value: "Other", label: "Other" },
]

const SIZE = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "FreeSize", label: "FreeSize" },
];

const COLOR = [
  { value: "Red", label: "Red" },
  { value: "Black", label: "Black" },
  { value: "White", label: "White" },
  { value: "Blue", label: "Blue" },
  { value: "Green", label: "Green" },
  { value: "Grey", label: "Grey" },
  { value: "Pink", label: "Pink" },
  { value: "Violet", label: "Violet" },
  { value: "Yellow", label: "Yellow" },
  { value: "Orange", label: "Orange" },
];

export { fadeImages, CATEGORY, TRADEMARK, SIZE, COLOR, STYLE, TYPE };
