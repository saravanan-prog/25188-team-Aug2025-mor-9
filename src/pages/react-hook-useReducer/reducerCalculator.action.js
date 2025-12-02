export const calcReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return (state += 1);

    case "sub":
      return (state -= 1);

    case "mul":
      return (state *= 5);

    default:
      return (state = 0);
  }
};
