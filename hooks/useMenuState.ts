import { useState, useEffect } from "react";

export function useMenuState() {
  const [open, setOpen] = useState(false);
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  return { open, setOpen };
}
