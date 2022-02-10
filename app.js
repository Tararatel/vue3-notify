const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type here something',
      },
      notes: ['task 1', 'task 2', 'task 3'],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes - JSON.parse(localNotes);
      }
    },
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = '';
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
  },
};

Vue.createApp(App).mount('#app');
