<template>
    <section class="profile">
        <div class="profile__image">
            <picture>
                <source srcset="/images/temp/bg.png" type="image/webp" media="(min-width: 991.98px)">
                <img class="profile__bg" src="/images/temp/bg.png" alt="profile image background" />
            </picture>
        </div>
        <div class="container">
            <div class="profile__text">
                <img class="profile__logo" src="/images/temp/logo.svg" alt="logo" />
                <div class="profile__username">
                    <span class="profile__inner-text">
                        Username Username
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1798 1.17597C7.57775 0.605394 8.42225 0.605395 8.8202 1.17597L8.9551 1.36937C9.24225 1.78108 9.79012 1.91611 10.2357 1.68502L10.445 1.57645C11.0626 1.25618 11.8103 1.64863 11.8975 2.33879L11.9271 2.57273C11.99 3.07072 12.4124 3.4449 12.9143 3.44734L13.1501 3.44849C13.8458 3.45188 14.3255 4.14689 14.082 4.79852L13.9995 5.01941C13.8238 5.4896 14.0238 6.0172 14.4672 6.25263L14.6754 6.36323C15.2898 6.68951 15.3916 7.52785 14.8731 7.99168L14.6974 8.1489C14.3233 8.48359 14.2553 9.04373 14.5384 9.45822L14.6714 9.65293C15.0638 10.2274 14.7643 11.017 14.0897 11.1867L13.8611 11.2443C13.3743 11.3668 13.0537 11.8312 13.1118 12.3297L13.1391 12.564C13.2196 13.2549 12.5875 13.8149 11.9112 13.6518L11.682 13.5964C11.1941 13.4787 10.6944 13.7409 10.5142 14.2094L10.4295 14.4295C10.1796 15.0787 9.35967 15.2808 8.83673 14.822L8.65947 14.6665C8.28213 14.3355 7.71787 14.3355 7.34053 14.6665L7.16327 14.822C6.64033 15.2808 5.82038 15.0787 5.57053 14.4294L5.48584 14.2094C5.30556 13.7409 4.80593 13.4787 4.31798 13.5964L4.08876 13.6518C3.41253 13.8149 2.78041 13.2549 2.8609 12.564L2.88818 12.3297C2.94625 11.8312 2.62572 11.3668 2.13894 11.2443L1.91027 11.1867C1.23565 11.017 0.936194 10.2274 1.32857 9.65293L1.46157 9.45822C1.7447 9.04373 1.67668 8.48359 1.30259 8.1489L1.12686 7.99168C0.608413 7.52785 0.710206 6.68951 1.32459 6.36323L1.53284 6.25263C1.97616 6.0172 2.17625 5.4896 2.00054 5.01941L1.918 4.79852C1.6745 4.14689 2.15422 3.45188 2.84986 3.44849L3.08566 3.44734C3.58761 3.4449 4.00996 3.07072 4.0729 2.57273L4.10246 2.33879C4.18968 1.64863 4.93744 1.25617 5.55497 1.57645L5.76429 1.68502C6.20988 1.91612 6.75775 1.78108 7.0449 1.36937L7.1798 1.17597Z" fill="url(#paint0_linear_456_11671)"/>
                        <g clip-path="url(#clip0_456_11671)">
                        <path d="M5.45459 8.36361L6.90914 9.81816L10.5455 6.18179" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_456_11671" x1="2.54545" y1="2.90909" x2="13.4545" y2="13.8182" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#C0A27E"/>
                        <stop offset="1" stop-color="#BE8848"/>
                        </linearGradient>
                        <clipPath id="clip0_456_11671">
                        <rect width="8.72727" height="8.72727" fill="white" transform="translate(3.63647 3.63635)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    <span class="profile__plank">
                        18+
                    </span>
                </div>
                <p class="profile__work">Род деятельности</p>
                <p class="profile__about">Описание профиля и автора предположительно длиной в сто пятьдесят (150)
                    символов</p>
            </div>
            <div class="profile__social">
                <NuxtLink class="profile__link" to="vk" external>
                    <img class="profile__icon" src="/assets/icons/social/vk.svg" alt="VK" />
                </NuxtLink>
                <NuxtLink class="profile__link" to="vk" external>
                    <img class="profile__icon" src="/assets/icons/social/youtube.svg" alt="YOUTUBE" />
                </NuxtLink>
                <NuxtLink class="profile__link" to="vk" external>
                    <img class="profile__icon" src="/assets/icons/social/telegram.svg" alt="TELEGRAM" />
                </NuxtLink>
            </div>
            <div class="profile-subs">
                <div class="profile-subs__col">
                    <p class="profile-sub__number">666</p>
                    <p class="profile-sub__desc">публикаций</p>
                </div>
                <div class="profile-subs__col">
                    <p class="profile-sub__number">666</p>
                    <p class="profile-sub__desc">публикаций</p>
                </div>
                <div class="profile-subs__col">
                    <p class="profile-sub__number">666</p>
                    <p class="profile-sub__desc">публикаций</p>
                </div>
            </div>
            <div class="profile__option">
                <SharedUiButton color="secondary" class="profile__button">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 2.5V9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M2.5 6H9.5" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <span>Подписаться</span>
                </SharedUiButton>
                <SharedUiButton class="profile__button profile__button--primary">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6V11H2V6" stroke="#F0F0F0" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 3.5H1V6H11V3.5Z" stroke="#F0F0F0" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 11V3.5" stroke="#F0F0F0" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M6 3.5H3.75C3.41848 3.5 3.10054 3.3683 2.86612 3.13388C2.6317 2.89946 2.5 2.58152 2.5 2.25C2.5 1.91848 2.6317 1.60054 2.86612 1.36612C3.10054 1.1317 3.41848 1 3.75 1C5.5 1 6 3.5 6 3.5Z"
                            stroke="#F0F0F0" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M6 3.5H8.25C8.58152 3.5 8.89946 3.3683 9.13388 3.13388C9.3683 2.89946 9.5 2.58152 9.5 2.25C9.5 1.91848 9.3683 1.60054 9.13388 1.36612C8.89946 1.1317 8.58152 1 8.25 1C6.5 1 6 3.5 6 3.5Z"
                            stroke="#F0F0F0" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Поддержать автора</span>
                </SharedUiButton>
            </div>
            <div class="profile__level profile-level">
                <p class="profile-level__label">Уровни подписки</p>
                <SharedUiSelect class="profile-level__select" :options="selectValue"></SharedUiSelect>
            </div>
            <div class="profile-goal">
                <div class="profile-goal__top">
                    <div>
                        0
                    </div>
                    <div>
                        333 тыс
                    </div>
                    <div>
                        1 млн
                    </div>
                </div>
                <div class="profile-goal__middle">
                    <div class="profile-goal__line">
                    </div>
                </div>
                <div class="profile-goal__text">
                    <div>
                        Цель
                    </div>
                    <div>
                        Покинуть Землю в 2025
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const selectValue = ref([
    {
        label: 'Аспирант'
    },
    {
        label: 'Научный сотрудник'
    }
])
</script>
<style scoped>

.profile-level__select {
    margin-bottom: 16px;
}
.profile-level__label {
    margin: 16px 0 8px 0;
}
.profile__plank {
    color: var(--color-body-text-secondary);
}
.profile__username {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}
.profile__logo {
    width: 64px;
    height: 64px;
    border-radius: 999px;
    position: absolute;
    top: -33px;
    background-color: white;
    left: calc(50% - 32px);
}
.profile {
    font-size: 12px;
}
.profile__work {
    color: var(--color-five);
    font-weight: 600;
}
.profile__button {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    flex: 1;
    justify-content: center;
}
.profile__button span {
    font-size: 12px;
}

.profile__image {
    height: 80px;
    position: relative;
    overflow: hidden;
}

.profile__bg {
    object-fit: contain;
}

.profile__text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 40px;
    text-align: center;

    position: relative;
}
.profile-subs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;

    margin-top: 18px;
    margin-bottom: 20px;
}

.profile__button--primary {
    padding-left: 8px;
    padding-right: 8px;
}

.profile__option {
    display: flex;
    flex-direction: row;
    gap: 4px;
    margin-bottom: 16px;
}
.profile__icon {
    width: 28px;
    height: 28px;
}
.profile__link {
    display: block;
}
.profile__social {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;

    margin-top: 16px;
}
.profile__inner-text, .profile-sub__number {
    font-weight: 600;
}
.profile-sub__number {
    margin-bottom: 6px;
}
.profile-sub__desc {
    color: var(--color-body-text-secondary);
}
.profile-goal {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 4px;

    background-color: var(--color-background-secondary);
}
.profile-goal__text, .profile-goal__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.profile-goal__line {
    width: 100%;
    border-radius: 3px;
    background-color: var(--color-primary);
    background: linear-gradient(90deg, var(--color-five) 50%, var(--color-fourth) 50%);
    height: 3px;
}
@media (min-width: 991.98px) {
    .profile__image {
        height: 334px;
    }
}
</style>