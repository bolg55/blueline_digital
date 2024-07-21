function flattenAttributes(data) {
  // Check if data is a plain object or null
  if (typeof data !== 'object' || data === null || data instanceof Date) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  // Initialize an object to hold the flattened structure
  let flattened = {};

  // Iterate over each property in the object
  for (let key in data) {
    // Continue if the property is not directly on the object
    if (!data.hasOwnProperty(key)) continue;

    // Special handling for 'attributes' and 'data' keys
    if (
      (key === 'attributes' || key === 'data') &&
      typeof data[key] === 'object' &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export default flattenAttributes;
