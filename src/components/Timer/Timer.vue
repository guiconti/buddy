<template>
  <v-container>
    <h2 class="ml-12 mt-12 display-2">
      BuddyTimer
    </h2>
    <v-layout row wrap align-center justify-center class="mt-12 pt-12">
      <v-flex offset-xs4 xs4>
        <v-combobox
          v-model="selectedTodo"
          outlined
          color="black"
          :items="todos"
          label="To do 1"
        />
      </v-flex>
      <v-flex xs4 />
      <v-flex xs12>
        <v-layout row wrap align-center justify-center>
          <v-flex xs4>
            <v-time-picker v-model="timePicker" use-seconds @change="changeTime" />
          </v-flex>
          <v-flex xs3>
            <v-text-field
              v-model="activityTime"
              outlined
              color="black"
              class="mb-12"
              :validate-on-blur="true"
              label="Tempo de atividade"
              type="text"
              required
              @keyup.enter="submit"
            />
            <v-text-field
              v-model="focusTime"
              outlined
              color="black"
              class="mb-12"
              :validate-on-blur="true"
              label="Tempo de foco"
              type="text"
              required
              @keyup.enter="submit"
            />
            <v-text-field
              v-model="intervalTime"
              outlined
              color="black"
              :validate-on-blur="true"
              label="Tempo de intervalo"
              type="text"
              required
              @keyup.enter="submit"
            />
            <v-btn class="success" large rounded @click="startTimer">
              Play
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <Break :open="askBreak" @close="askBreak = false" />
  </v-container>
</template>

<script>
import Break from './Break';

export default {
  components: {
    Break,
  },
  data: () => ({
    askBreak: false,
    timeStarted: false,
    selectedTodo: 'To do 1',
    todos: [
      'To do 1',
      'To do 2',
      'To do 3',
      'To do 4',
      'To do 5',
      'To do 6',
      'To do 7',
      'To do 8',
      'To do 9',
      'To do 10',
      'To do 11',
    ],
    timePicker: '00:17:19',
    activityTime: '5h 25min',
    focusTime: '17 min',
    intervalTime: '5 min',
    yogaTimer: 0,
    timeToYoga: 5,
    askedYoga: false,
  }),
  methods: {
    startTimer() {
      if (!this.timeStarted) {
        this.changeTime(this.timePicker);
        setTimeout(this.incrementTimer, 1000);
      }
    },
    incrementTimer() {
      this.yogaTimer++;
      let tempPicker = this.timePicker.split(':');
      tempPicker[2]++;
      if (tempPicker[2] > 60) {
        tempPicker[1]++;
        tempPicker[2] = 0;
        if (tempPicker[1] > 60) {
          tempPicker[0]++;
          tempPicker[1] = 0;
        }
      }
      this.timePicker = tempPicker.join(':');
      setTimeout(this.incrementTimer, 1000);
      if (!this.askedYoga && this.yogaTimer >= this.timeToYoga) {
        this.askBreak = true;
        this.askedYoga = true;
      }
    },
    changeTime(e) {
      this.focusTime = `${this.timePicker.split(':')[1]} min`;
    },
  },
}
</script>