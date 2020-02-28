export const inputFocused = (setSearchFocus) => {
    const searchField = document.querySelector('input[type="text"]');

    searchField.addEventListener("focus", () => {
      setSearchFocus(true);
    });

    searchField.addEventListener("blur", () => {
      setSearchFocus(false);
    });

    return function cleanup() {
      setSearchFocus(false);

      searchField.removeEventListener("focus", () => {
        setSearchFocus(true);
      });
      searchField.removeEventListener("blur", () => {
        setSearchFocus(false);
      });
    };
}