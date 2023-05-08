// @ts-check
let darkModeEnabled = localStorage.getItem('dark');

if (darkModeEnabled === 'true' || window.matchMedia('(prefers-color-scheme:dark)').matches) {
  document.documentElement.classList.add('dark');
}
