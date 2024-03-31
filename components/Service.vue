<template>
    <div class="container">
        <hr>
        <div class="service">
            <p>change lang:</p>
            <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale)">
                {{ locale }}
            </a>
        </div>
        <div class="service">
            <p>change theme:</p>
            <a href="#" @click.prevent.stop="useTheme('dark')">
                dark
            </a>
            <a href="#" @click.prevent.stop="useTheme('light')">
                light
            </a>
        </div>
        <hr>
    </div>
</template>
<script setup>
const { locale, locales, setLocale } = useI18n()
const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
})
</script>
<style>
.service a {
    color: var(--color-five);
    margin-right: 10px;
}
</style>