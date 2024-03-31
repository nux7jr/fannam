<template>
    <form class="search">
        <label class="search__label">
            <span class="visually-hidden">{{ $t('header.search') }}</span>
            <input id="search" name="search" class="search__input" type="search" :placeholder="$t('header.search')">
        </label>
            <button type="submit" class="search__button" :aria-label="$t('header.search')">
                <span class="visually-hidden">{{ $t('header.search') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#8D8F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.5 17.5L13.875 13.875" stroke="#8D8F91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
    </form>
</template>
<style scoped>
.search {
    display: flex;
    justify-content: space-between;
    border-radius: var(--border-small-radius);
    background: #F5F5F5;
}
.search__label {
    padding: 12px 0 12px 16px;
}
.search__input {
    width: 100%;

    border-radius: 5px;

    border: none;
    background-color: transparent;
}
.search__input:focus {
    outline: none;
}
.search__button {
    border-color: transparent;
    width: fit-content;

    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 12px 16px;
}

</style>