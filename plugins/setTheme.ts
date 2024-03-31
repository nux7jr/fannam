
export default defineNuxtPlugin((nuxtApp) => {
  const userTheme = useCookie('user-theme');
  const appConfig = useAppConfig();
  const determineTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark' 
    } else {
      return 'light'
    }
  }
  if (!userTheme.value) {
    useTheme(appConfig.baseTheme);
    if (process.client) {
      const currentTheme = determineTheme();
      useTheme(currentTheme);
    }
  } else {
    useTheme(userTheme.value);
  }
});