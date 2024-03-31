<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
:root {
  --border-radius: 15px;
  --border-small-radius: 8px;
}
/* #25282D */

html[data-theme="light"] {
  --color-primary: #25282D;
  --color-secondary: #353535;
  --color-third: white;
  --color-fourth: #A8A8A8;
  --color-five: #467CF3;

  --color-selection-bg: black;
  --color-selection-text: white;

  --color-background: white;
  --color-body: white;
  --color-body-text: #25282D;
  --color-body-text-secondary: #111214;

  --color-btn-bg-primary: white;
  --color-btn-primary: #25282D;

  --color-btn-bg-secondary: #467CF3;
  --color-btn-secondary: white;

  --color-header-line: #F3F3F3;
  --color-header-secondary-bg: #F3F3F3;

  --color-mobile-menu-bg: white;
  --color-mobile-menu-text: #353535;
  --color-mobile-menu-active: #0F0F0F;
}
html[data-theme="dark"] {
  --color-primary: white;
  --color-secondary: #353535;
  --color-third: #25282D;
  --color-fourth: #A8A8A8;
  --color-five: #467CF3;

  --color-selection-bg: #A8A8A8;
  --color-selection-text: black;

  --color-background: #2F2F2F;
  --color-body: #181818;
  --color-body-text: white;
  --color-body-text-secondary: #C4C7CF;

  --color-btn-bg-primary: #25282D;
  --color-btn-primary: white;

  --color-btn-bg-secondary: #467CF3;
  --color-btn-secondary: white;

  --color-header-line: #353535;
  --color-header-secondary-bg: #434343;


  --color-mobile-menu-bg: #353535;
  --color-mobile-menu-text: white;
  --color-mobile-menu-active: white;
}
</style>