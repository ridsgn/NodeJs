export const ascending_sort = data => {
  return data.sort();
};

export const descending_sort = data => {
  let sorting = ascending_sort(data);

  return sorting.reverse();
};
