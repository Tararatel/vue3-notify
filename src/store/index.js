import { createStore } from 'vuex';

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue3',
        tags: ['work'],
      },
      {
        title: 'Finish course',
        tags: ['work', 'home'],
      },
      {
        title: 'Hi',
        tags: [],
      },
    ],
  },

  mutations: {
    setNotes(state, note) {
      console.log('called mutation setNotes');
      state.notes.push(note);
    },
    delNotes(state, index) {
      console.log('called mutation delNotes');
      state.notes.splice(index, 1);
    },
  },

  actions: {
    setNotes(context, title) {
      const note = {
        title: title,
        tags: [],
      };
      context.commit('setNotes', note);
    },
    delNotes(context, index) {
      context.commit('delNotes', index);
    },
  },

  getters: {
    getNotes(state) {
      return state.notes;
    },
  },
});
