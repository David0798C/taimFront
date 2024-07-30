export const customStyles = {
  option: (defaultStyles, state) => ({
    // You can log the defaultStyles and state for inspection
    // You don't need to spread the defaultStyles
    ...defaultStyles,
    color: state.isSelected ? "#000000" : "#000000",
    backgroundColor: state.isSelected ? "#ffffff0" : "#ffffff",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    // Notice how these are all CSS properties
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "20px",
    marginTop: "20px",
    width: "200px",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000000" }),
};

export const customStyles2 = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    color: state.isSelected ? "#000000" : "#000000",
    backgroundColor: state.isSelected ? "#ffffff0" : "#ffffff",
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    // Notice how these are all CSS properties
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "20px",
    width: "560px",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000000" }),
};
