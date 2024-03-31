<template>
    <div class="mobile-menu">
        <NuxtLink class="mobile-menu__item" to="/">
            <svg class="mobile-menu__svg" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M2.5 8.97825C2.5 8.36107 2.78495 7.77846 3.27212 7.39954L8.77212 3.12177C9.49434 2.56004 10.5057 2.56004 11.2279 3.12177L16.7279 7.39954C17.2151 7.77846 17.5 8.36107 17.5 8.97825V17.1667C17.5 17.6088 17.3244 18.0327 17.0118 18.3453C16.6993 18.6578 16.2754 18.8334 15.8333 18.8334H4.16667C3.72464 18.8334 3.30072 18.6578 2.98816 18.3453C2.67559 18.0327 2.5 17.6088 2.5 17.1667V8.97825Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 18.8333V10.5H12.5V18.8333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="mobile-menu__span">{{ $t('menu.general') }}</span>
        </NuxtLink>
        <button class="mobile-menu__item">
            <svg class="mobile-menu__svg" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 18L13.875 14.375" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="mobile-menu__span">{{ $t('menu.search') }}</span>
        </button>
        <NuxtLink class="mobile-menu__item" to="/post">
            <svg class="mobile-menu__svg" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M15.8333 3H4.16667C3.24619 3 2.5 3.74619 2.5 4.66667V16.3333C2.5 17.2538 3.24619 18 4.16667 18H15.8333C16.7538 18 17.5 17.2538 17.5 16.3333V4.66667C17.5 3.74619 16.7538 3 15.8333 3Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7.16675V13.8334" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.66699 10.5H13.3337" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="mobile-menu__span">{{ $t('menu.newPost') }}</span>
        </NuxtLink>
        <NuxtLink class="mobile-menu__item" to="/personal">
            <svg class="mobile-menu__svg" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M17.1663 18V16.3333C17.1663 15.4493 16.8152 14.6014 16.19 13.9763C15.5649 13.3512 14.7171 13 13.833 13H7.16634C6.28229 13 5.43444 13.3512 4.80932 13.9763C4.1842 14.6014 3.83301 15.4493 3.83301 16.3333V18" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5003 9.66667C12.3413 9.66667 13.8337 8.17428 13.8337 6.33333C13.8337 4.49238 12.3413 3 10.5003 3C8.65938 3 7.16699 4.49238 7.16699 6.33333C7.16699 8.17428 8.65938 9.66667 10.5003 9.66667Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="mobile-menu__span">{{ $t('menu.personal') }}</span>
        </NuxtLink>
    </div>
</template>
<style scoped>
.mobile-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: var( --color-mobile-menu-bg);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    height: 60px;
}
.mobile-menu__item {
    display: flex;
    flex-direction: column;
    gap: 3px;

    align-items: center;

    text-decoration: none;
    color: var(--color-fourth);

    font-size: 11px;
    font-style: normal;
    font-weight: 600;
}
.mobile-menu__item * path {
    stroke: var(--color-fourth);
}
.NuxtLink-active {
    color: var(--color-mobile-menu-active);
}
.NuxtLink-active * path {
    stroke: var(--color-mobile-menu-active);
}
/* @media (min-width: 991.98px) {
    .mobile-menu {
        display: none;
    }
} */
</style>