<template>
  <v-container class="pl-12 ml-12 pr-2" style="margin-right: -48px !important;">
    <v-layout row wrap>
      <v-flex xs3>
        <h2 class="mb-4">
          To Do
        </h2>
        <v-card
          v-for="(todo, i) in todos"
          :key="i"
          class="mb-4"
          color="#D2D2D2"
          :width="$vuetify.breakpoint.xlOnly ? 370 : 270"
          height="50"
        >
          <div class="pl-3 pt-3">
            <v-icon color="grey">mdi-circle</v-icon>
              {{ todo }}
            <v-icon
              class="ml-8 pl-12"
              color="black"
              :style="{'padding-left': $vuetify.breakpoint.xlOnly ? '148px !important' : '48px !important'}"
              @click="edit = true"
            >
              mdi-pencil
            </v-icon>
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <h2 class="mb-4">
          Alerta
        </h2>
        <v-card
          v-for="(alert, i) in alerts"
          :key="i"
          class="mb-4"
          color="#D2D2D2"
          :width="$vuetify.breakpoint.xlOnly ? 370 : 270"
          height="50"
        >
          <div class="pl-3 pt-3">
            <v-icon :color="Math.floor(Math.random() * Math.floor(2)) < 1 ? 'error' : 'orange'">mdi-circle</v-icon>
              {{ alert }}
            <v-icon
              class="ml-8 pl-12"
              color="black"
              :style="{'padding-left': $vuetify.breakpoint.xlOnly ? '148px !important' : '48px !important'}"
              @click="edit = true"
            >
              mdi-pencil
            </v-icon>
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <h2 class="mb-4">
          Doing
        </h2>
        <v-card
          v-for="(doing, i) in doings"
          :key="i"
          class="mb-4"
          color="#D2D2D2"
          :width="$vuetify.breakpoint.xlOnly ? 370 : 270"
          height="50"
        >
          <div class="pl-3 pt-3">
            <v-icon color="amber">mdi-circle</v-icon>
              {{ doing }}
            <v-icon
              class="ml-8 pl-12"
              color="black"
              :style="{'padding-left': $vuetify.breakpoint.xlOnly ? '148px !important' : '48px !important'}"
              @click="edit = true"
            >
              mdi-pencil
            </v-icon>
          </div>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <h2 class="mb-4">
          Done
        </h2>
        <v-card
          v-for="(done, i) in dones"
          :key="i"
          class="mb-4"
          color="#D2D2D2"
          :width="$vuetify.breakpoint.xlOnly ? 370 : 270"
          height="50"
        >
          <div class="pl-3 pt-3">
            <v-icon color="success">mdi-circle</v-icon>
              {{ done }}
            <v-icon
              class="ml-8 pl-12"
              color="black"
              :style="{'padding-left': $vuetify.breakpoint.xlOnly ? '148px !important' : '48px !important'}"
              @click="edit = true"
            >
              mdi-pencil
            </v-icon>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <Edit :open="edit" @close="edit = false" />
  </v-container>
</template>

<script>
import Edit from './Edit';

export default {
  components: {
    Edit,
  },
  data: () => ({
    edit: false,
    todos: ['Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa',],
    alerts: ['Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa',],
    doings: ['Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa',],
    dones: ['Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa', 'Fazer tal coisa',]
  }),
}
</script>