function CategoryFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="jewelery">Jewellery</option>
      <option value="electronics">Electronics</option>
    </select>
  );
}

export default CategoryFilter;