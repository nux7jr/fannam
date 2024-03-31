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
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.32577 1.5621C9.11511 0.354161 10.8849 0.354161 11.6742 1.5621L12.3892 2.65623C12.7954 3.27787 13.5126 3.62327 14.2519 3.55327L15.5532 3.43008C16.9897 3.29408 18.0931 4.67775 17.6409 6.04802L17.2312 7.28919C16.9985 7.99438 17.1756 8.77047 17.6913 9.30484L18.5989 10.2454C19.6009 11.2837 19.2071 13.0091 17.8538 13.5099L16.628 13.9634C15.9315 14.2212 15.4352 14.8435 15.3389 15.5799L15.1695 16.8759C14.9824 18.3067 13.3879 19.0745 12.1526 18.3287L11.0337 17.6531C10.398 17.2693 9.60198 17.2693 8.96626 17.6531L7.84736 18.3287C6.61209 19.0745 5.01757 18.3067 4.8305 16.8759L4.66105 15.5799C4.56478 14.8435 4.06845 14.2212 3.372 13.9634L2.1462 13.5099C0.792909 13.0091 0.399095 11.2837 1.4011 10.2454L2.3087 9.30484C2.82437 8.77047 3.00151 7.99438 2.76876 7.28919L2.35911 6.04802C1.90686 4.67775 3.0103 3.29408 4.44685 3.43008L5.74805 3.55327C6.48735 3.62327 7.20457 3.27787 7.61079 2.65623L8.32577 1.5621Z"
                            fill="#6896FB" />
                    </svg>
                    <span>
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
            <div class="profile__level">
                Уровни подписки
                select
                Научный сотрудник
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
<style scoped>
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
.profile-sub__desc {
    color: var(--color-body-text-secondary);
}
.profile-goal {
    display: flex;
    flex-direction: column;
    gap: 10px;
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