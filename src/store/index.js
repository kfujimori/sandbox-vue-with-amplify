import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ADD_BOOK = 'addBook';

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    count2: 0,
    books: [
      {
        isbn: "11111",
        title: "title1",
        price: 1000,
      },
      {
        isbn: "22222",
        title: "title2",
        price: 2000,
      },
      {
        isbn: "33333",
        title: "title3",
        price: 3000,
      },
    ],
  },
  getters: {
    getBooksCount(state) {
      return state.books.length;
    },
    getBooksByPrice(state) {
      return price => {
        return state.books.filter(book => book.price < price)
      }
    },
    getBookCountOver3000(state, getters) {
      return getters.getBooksByPrice(3000).length
    }
  },
  mutations: {
    minus(state) {
      state.count--;
      state.count2--;
    },
    plus(state) {
      state.count++;
      state.count2++;
    },
    [ADD_BOOK](state, payload) {
      state.books.push(payload.book);
    }
  },
  actions: {
    addAsync(context, payload) {
      setTimeout(() => {
        context.commit(ADD_BOOK, payload)
      }, 5000)
    }
  },
  modules: {
  }
})
