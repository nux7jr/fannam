
<template>
    <div class="header">
        <nav class="nav container">
            <ul class="nav__list">
                <li class="nav__item">
                    <NuxtLink aria-label="main page" class="nav__subitems" to="/">
                        <SharedIconsLogo></SharedIconsLogo>
                    </NuxtLink>
                </li>
                <li class="nav__item nav__search">
                    <SharedUiSearch class="nav__subitems"></SharedUiSearch>
                </li>
                <li class="nav__item nav-options">
                    <SharedUiButton class="singIn" color='secondary' :aria-label="$t('header.singIn')">{{ $t('header.singIn') }}</SharedUiButton>
                    <SharedUiButton class="register" :aria-label="$t('header.register')">{{ $t('header.register') }}</SharedUiButton>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
.header {
    background-color: var(--color-primary);

    position: sticky;
    top: 0;
    z-index: 1;

    height: 40px;

    margin: 0 auto;

    border-bottom: 1px solid var(--color-header-line);
    background: var(--color-background);
}

.nav {
    height: 100%;
}

.nav__item {
    flex: 1 1 33%;
}

.profile-link {
    display: flex;
    align-items: center;
}

.nav__profile {
    width: 42px;

    border-radius: 999px;
}

.nav__list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: inherit;
}

.nav-options {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
}

.nav__search {
    display: none;
}

.register {
    display: none;
}

@media (min-width: 991.98px) {
    .header {
        height: 80px;
    }

    .register {
        display: block;
    }

    .nav__search {
        display: flex;
        justify-content: center;
    }
}
</style>