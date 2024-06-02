import toast from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";
import React, { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (newQuery: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;

    if (queryInput.value.trim() === "") {
      toast.error("Please, enter text to search");
    }
    onSubmit(queryInput.value.trim());
    form.reset();
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
