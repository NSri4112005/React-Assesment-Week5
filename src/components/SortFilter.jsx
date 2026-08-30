function SortFilter({ sort, setSort }) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="default">Sort By</option>
      <option value="price-low">Price: Low → High</option>
      <option value="price-high">Price: High → Low</option>
      <option value="rating">Rating</option>
    </select>
  );
}

export default SortFilter;