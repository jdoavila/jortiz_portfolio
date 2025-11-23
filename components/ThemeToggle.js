import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-slate-200 opacity-50"></div>;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 transition-colors hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <i className="bx bx-sun text-2xl text-yellow-400"></i>
      ) : (
        <i className="bx bx-moon text-2xl text-slate-700"></i>
      )}
    </button>
  );
}
