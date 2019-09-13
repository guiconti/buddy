<template>
  <v-dialog v-model="open" width="500">
    <v-card>
      <v-container class="pa-6">
          <v-form ref="form" class="text-center">
            <v-text-field
              v-model="todo"
              outlined
              color="black"
              :validate-on-blur="true"
              label="To do"
              type="text"
              required
              @keyup.enter="submit"
            />
            <v-date-picker v-model="picker" class="mb-8 text-left" />
            <v-textarea
              v-model="description"
              outlined
              color="black"
              :validate-on-blur="true"
              label="Descrição"
              type="text"
              required
              @keyup.enter="submit"
            />
            <v-text-field
              v-model="commentary"
              outlined
              color="black"
              :validate-on-blur="true"
              label="Comentário"
              type="text"
              required
              @keyup.enter="submit"
            />
            <v-layout row wrap align-center justify-center>
              <v-flex xs4>
                <v-btn rounded color="success" @click="send">
                  Salvar
                </v-btn>
              </v-flex>
              <v-flex xs4>
                <v-btn rounded color="error" @click="cancel">
                  Cancelar
                </v-btn>
              </v-flex>
              <v-flex xs4>
                <v-btn rounded color="success" @click="initiate">
                  Iniciar
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: () => ({
    todo: 'Fazer tal coisa',
    picker: '2019-08-26',
    description: 'Terminar relatório para revisão',
    commentary: 'Alterar parágrafo 2',
  }),
  watch: {
    open(val) {
      if (!val) {
        this.$emit('close');
      }
    }
  },
  methods: {
    send() {
      this.$emit('close');
      this.open = false;
    },
    cancel() {
      this.$emit('close');
      this.open = false;
    },
    initiate() {
      this.$emit('initiate');
      this.open = false;
    },
  },
}
</script>