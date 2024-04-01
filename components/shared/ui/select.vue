<template>
    <div class="custom-select" @click="toggleDropdown" ref="selectRef">
        <button class="selected-option">{{ selectedOption ? selectedOption.label : 'Select an option' }}</button>
        <ul v-if="isOpen" class="options-list">
            <li v-for="(option, index) in options" :key="index">
                <button @click="selectOption(option)" class="option">
                    {{ option.label }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    options: {
        type: Array,
        required: true
    },
    value: {
        type: Object || String || Number,
        default: null
    }
})

const selectedOption = ref(props.value);
const isOpen = ref(false);
const selectRef = ref(null);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
    selectedOption.value = option;
    isOpen.value = false;
    // emit('input', option);
};

const closeDropdownOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
        isOpen.value = false;
    }
};
onMounted(() => {
    document.addEventListener('click', closeDropdownOutside);
});
onUnmounted(() => {
    document.removeEventListener('click', closeDropdownOutside);
});
</script>

<style scoped>
.custom-select {
    position: relative;
    cursor: pointer;
}

.selected-option {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 100%;
}

.options-list {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 0.25rem 0.25rem;
    list-style: none;
    padding: 0;
    margin: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.option {
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100%;
}

.option:hover {
    background-color: #f0f0f0;
}
</style>
