import { Product } from "./../types/product";
import { atom } from "recoil";

// Todoリストを保持
const productListState = atom<Product[]>({
  key: "courseListState",
  default: [
    {
      isNew: true,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 20,
      rating: 4.2,
      numReviews: 34,
    },
    {
      isNew: false,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 12,
      rating: 3.6,
      numReviews: 12,
    },
    {
      isNew: true,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 30,
      rating: 4.8,
      numReviews: 29,
    },
    {
      isNew: true,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 20,
      rating: 4.2,
      numReviews: 34,
    },
    {
      isNew: false,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 12,
      rating: 3.6,
      numReviews: 12,
    },
    {
      isNew: true,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 30,
      rating: 4.8,
      numReviews: 29,
    },
    {
      isNew: true,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 20,
      rating: 4.2,
      numReviews: 34,
    },
    {
      isNew: false,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 12,
      rating: 3.6,
      numReviews: 12,
    },
    {
      isNew: true,
      imageURL:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      name: "Wayfarer Classic",
      price: 30,
      rating: 4.8,
      numReviews: 29,
    },
  ],
});

export { productListState };
