import { createStore } from 'vuex';
import itemsData from '@/items.json';
import usersData from '@/users.json';

const store = createStore({
    state: {
        isLoggedIn: false,
        user: null,
        searchQuery: '',
        searchResults: [],
        items: itemsData,
        cart: []
    },
    mutations: {
        setLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
        setUser(state, user) {
            state.user = user;
        },
        setSearchQuery(state, query) {
            state.searchQuery = query;
        },
        setSearchResults(state, results) {
            state.searchResults = results;
        },
        addToCart(state, item) {
            const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                state.cart[existingItemIndex].quantity++;
            } else {
                state.cart.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(state, item) {
            const itemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
            if (itemIndex !== -1) {
                if (state.cart[itemIndex].quantity > 1) {
                    state.cart[itemIndex].quantity--;
                } else {
                    state.cart.splice(itemIndex, 1);
                }
            }
        }
    },
    actions: {
        login({ commit }, { username, password }) {
            return new Promise((resolve) => {
                const user = usersData.find(u => u.username === username && u.password === password);
                if (user) {
                    commit('setLoggedIn', true);
                    commit('setUser', { username });
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        },
        logout({ commit }) {
            commit('setLoggedIn', false);
            commit('setUser', null);
        },
        search({ commit, state }, query) {
            commit('setSearchQuery', query);
            const allItems = [...state.items.phones, ...state.items.tablets, ...state.items.laptops];
            const results = allItems.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
            commit('setSearchResults', results);
        },
        addToCart({ commit }, item) {
            commit('addToCart', item);
        },
        removeFromCart({ commit }, item) {
            commit('removeFromCart', item);
        }
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn,
        user: state => state.user,
        searchQuery: state => state.searchQuery,
        searchResults: state => state.searchResults,
        cart: state => state.cart,
        cartItems: state => state.cart,
        cartItemsCount: state => state.cart.reduce((total, item) => total + item.quantity, 0)
    }
});

export default store;
