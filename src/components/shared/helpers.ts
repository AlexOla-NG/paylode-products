const handlePreventDefault = (event: React.FormEvent<HTMLButtonElement>) => {
  event.preventDefault();
};

// STUB: use to convert title to titleCase
// has no effect on items in exceptions list
const convertTitleCase = (title: string) => {
  const exceptions = ["and", "the", "a", "an", "for", "to", "but", "at", "by"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return titleCase[0].toUpperCase() + titleCase.slice(1);
};

export { handlePreventDefault, convertTitleCase };
