const SEARCH = "SEARCH";

const search = (value) => {
  return {
    type: SEARCH,
    payload: value,
  };
};

export { SEARCH, search };
