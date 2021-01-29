function removeOptions(
  column, dropdown,
) {
  const removed = [];
  dropdown.forEach((option) => {
    if (option !== column) {
      removed.push(option);
    }
  });
  return removed;
}

export default removeOptions;
