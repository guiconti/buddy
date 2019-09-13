<template>
  <v-container class="mt-12">
    <v-layout row wrap align-center justify-center>
      <v-flex xs4 :style="{'margin-left': $vuetify.breakpoint.xlOnly ? '148px': '12px'}">
        <h2 class="display-2">
          BuddyDo
        </h2>
        <v-btn class="title pl-0 mt-2" text large @click="create = true">
          <v-icon large color="grey" class="mr-2">mdi-plus-circle</v-icon> Adicionar To Do
        </v-btn>
      </v-flex>
      <v-spacer />
      <v-flex xs6 :style="{'margin-right': $vuetify.breakpoint.xlOnly ? '168px': '12px'}">
        <v-layout row wrap class="grey-background">
          <v-flex xs4 xl3 v-for="(status, i) in statuses" :key="i">
            <v-icon :color="status.color">mdi-circle</v-icon>{{ status.name }}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <Create :open="create" @close="create = false" />
  </v-container>
</template>

<script>
import Create from './Create';

export default {
  components: {
    Create,
  },
  data() {
    return {
      create: false,
      statuses: [
        {
          name: 'To Do',
          color: 'grey',
        },
        {
          name: 'Doing',
          color: 'amber',
        },
        {
          name: 'Done',
          color: 'green',
        },
        {
          name: 'Entrega Próxima',
          color: 'orange',
        },
        {
          name: 'Atrasado',
          color: 'red',
        },
      ],
    };
  },
}
</script>

<style scoped>
.grey-background {
  background-color: rgb(222, 222, 222);
  padding: 16px !important;
}
</style>