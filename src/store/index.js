import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        text: null,
        symbols: [],
        indexSymbol: 0,
        wrongSymbol: false,
        timer: 0,
        countError: 0,
        loading: true,
        errorLoading: null,
    },
    getters: {
        symbols(state) {
            return state.symbols;
        },
        currentSymbol(state) {
            return state.symbols[state.indexSymbol];
        },
        indexSymbol(state) {
            return state.indexSymbol;
        },
        isWrong(state) {
            return state.wrongSymbol;
        },
        timer(state) {
            return state.timer;
        },
        speed(state) {
            return state.indexSymbol > 0 ? (state.indexSymbol + 1) / state.timer * 60 : 0;
        },
        countSymbols(state) {
            return state.symbols.length;
        },
        accuracy(state, getters) {
            return getters.countSymbols ? (getters.countSymbols - state.countError) / getters.countSymbols * 100 : 0;
        },
        countError(state) {
            return state.countError;
        },
        loading(state) {
            return state.loading;
        },
        errorLoading(state) {
            return state.errorLoading;
        }
    },
    mutations: {
        updateText(state, value) {
            state.text = value;
            state.symbols = state.text.split("");
        },
        updateIndexSymbol(state) {
            state.indexSymbol++;
        },
        wrongSymbol(state, value) {
            state.wrongSymbol = value;
            if (value) state.countError++;
        },
        updateTimer(state) {
            state.timer++;
        },
        reset(state) {
            state.indexSymbol = 0;
            state.wrongSymbol = false;
            state.timer = 0;
            state.countError = 0;
        },
        updateLoading(state, value) {
            state.loading = value;
        },
        updateErrorLoading(state, error) {
            state.errorLoading = error;
        },
    },
    actions: {
        async loadText(context) {
            const urlApi = "https://baconipsum.com/api/?type=all-meat&paras=1";

            await fetch(urlApi)
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Статус ошибки:", response.status);
                        context.commit("updateErrorLoading", `Статус ошибки: ${response.status}`);
                        context.commit("updateLoading", false);
                        return Promise.reject();
                    }
                    return response.json();
                })
                .then((data) => {
                    context.commit("updateText", data[0]);
                    context.commit("updateLoading", false);
                })
                .catch((e) => {
                    console.log("Ошибка:", e);
                    context.commit("updateErrorLoading", e);
                    context.commit("updateLoading", false);
                });
        },
    }
});