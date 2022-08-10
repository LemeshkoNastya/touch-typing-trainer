import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        text: null,
        symbols: [],
        indexSymbol: 0,
        wrongSymbol: false,
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
        },
    },
    actions: {
        async loadText(context) {
            const urlApi = "https://baconipsum.com/api/?type=all-meat&paras=1";

            await fetch(urlApi)
                .then((response) => {
                    if (response.status !== 200) {
                        console.log("Статус ошибки:", response.status);
                        return Promise.reject();
                    }
                    return response.json();
                })
                .then((data) => {
                    context.commit("updateText", data[0]);
                })
                .catch((e) => {
                    console.log("Ошибка:", e);
                });
        },
    }
});