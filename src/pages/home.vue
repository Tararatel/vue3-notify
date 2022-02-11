<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue';
export default {
  components: { Form, List },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes;
    },
  },

  methods: {
    handleSubmit(title) {
      this.$store.dispatch('setNotes', title);
    },
    handleRemove(index) {
      this.$store.dispatch('delNotes', index);
    },
  },
};
</script>
