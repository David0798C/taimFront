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
    backgroundColor: "#f8f8f80",
    padding: "10px",
    border: "none",
    boxShadow: "none",
    marginTop: "20px",
  }),
  singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#000000" }),
};
