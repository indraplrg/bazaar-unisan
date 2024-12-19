export const getAllProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return;
  }
};
