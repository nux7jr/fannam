<template>
    <header>
        <WidgetsTheHeader></WidgetsTheHeader>
    </header>
    <main class="page">
        <slot></slot>
    </main>
</template>
<style scoped>
.page {
    margin-bottom: 150px;
}
@media (min-width: 991.98px) {
    .page {
        margin-bottom: 0;
    }
  }
</style>
