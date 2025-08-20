// localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState"); // Use a consistent key
    if (serializedState === null) {
      return undefined; // No state found, let Redux use initial state
    }
    console.log("Loading state from local storage:", serializedState);
    // Parse the serialized state and return it
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from local storage:", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state to local storage:", err);
    // Handle write errors if necessary
  }
};
