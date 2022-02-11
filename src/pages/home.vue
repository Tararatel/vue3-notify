<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue';
export default {
  components: { Form, List },
  watch: {
    getNotes: {
      handler(updatedList) {
        localStorage.setItem('getNotes', JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes;
    },
  },

  methods: {
    lsNotes() {
      console.log('Who is it?');
      const localNotes = localStorage.getItem('getNotes');
      if (localNotes) {
        console.log('Who is it? ololo');
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit(title) {
      this.$store.dispatch('setNotes', title);
    },
    handleRemove(index) {
      this.$store.dispatch('delNotes', index);
    },
  },
};
</script>
