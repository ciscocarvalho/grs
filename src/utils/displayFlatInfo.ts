import { FlatInfo } from "../types/FlatInfo";

const snakeCaseToSentence = (name: string) => {
  let sentence = name.split("_").join(" ");
  return sentence.slice(0, 1).toUpperCase() + sentence.slice(1).toLowerCase();
};

const formatInfoValue = (value: FlatInfo[keyof FlatInfo]) => {
  if (value === null || value === undefined || value === "") {
    return "N/A";
  } else if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  } else {
    return Array.isArray(value) ? value.join(", ") : String(value);
  }
}

export const displayFlatInfo = (flatInfo: FlatInfo) => {
  for (let [key, value] of Object.entries(flatInfo)) {
    key = snakeCaseToSentence(key);
    const keySuffix = typeof value === "boolean" ? "? " : ": ";
    value = formatInfoValue(value);
  }
};
