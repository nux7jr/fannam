export function useTheme(theme: string) {
  const userTheme = useCookie("user-theme", {maxAge: 60 * 60 * 24 * 365});
  userTheme.value = theme;
  useHead({
    htmlAttrs: {
      "data-theme": theme,
    },
  });
}
