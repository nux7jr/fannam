import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

    const appConfig = useAppConfig()
    const user = ref(null);

    const isLogin = computed(() => !!user.value)

    async function login(userForm) {
        try {
            async function getToken() {
                const token = useCookie('token', {
                    path: '/',
                    maxAge: 60 * 60 * 24,
                    secure: process.env.NODE_ENV === 'production',
                    // sameSite: 'Strict',
                });
                const { data } = await useFetch(appConfig.api.baseUrl + '/auth/login', {
                    method: "POST",
                    body: userForm
                });
                token.value = await data.value.token;
            }
            await getToken();
            await fetchUser();
            return;
        } catch (error) {
            return "Неверный логин/пароль";
        }
    }

    async function fetchUser() {
        const { data: userData } = await useApiFetch('/user/profile');
        user.value = await userData.value[0];
        return user.value[0];
    }
    async function refresh() {
        const token = useCookie('token');
        const userData = {
            token: token.value
        }
        const { data, error } = await useApiFetch('/auth/refresh-token', {
            method: "POST",
            body: JSON.stringify(userData)
        });
        if (error.value) {
            user.value = null;
            token.value = null;
        } else {
            token.value = data.value.accessToken;
        }
    }
    async function logout() {
        const token = useCookie('token');
        user.value = null;
        token.value = null;
        navigateTo('/login');
    }
    return { user, login, fetchUser, isLogin, refresh, logout }
})