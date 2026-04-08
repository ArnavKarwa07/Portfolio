function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span
          className={`theme-option theme-option-day ${!isDark ? "is-active" : ""}`}
        >
          D
        </span>
        <span
          className={`theme-option theme-option-night ${isDark ? "is-active" : ""}`}
        >
          N
        </span>
      </span>
      <span
        className={`theme-toggle-thumb ${isDark ? "is-dark" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}

export default ThemeToggle;
