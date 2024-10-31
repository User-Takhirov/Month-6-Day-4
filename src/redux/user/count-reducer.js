const initialState = {
  count: 0,
};

export const CountReducer = (data = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...data, count: data.count + 1 };
    case "Decrement":
      return { ...data, count: data.count - 1 };
    default:
      return data;
  }
};
