export const state = () => ({
	theme: 'light'
});

export const getters = {
	getTheme(state) {
		return state.theme;
	}
};

export const mutations = {
	toggleTheme(state, color) {
		state.theme = color;
	}
};

export const actions = {};
