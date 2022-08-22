<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-img
          max-width="256"
          max-height="256"
          src="../assets/logo.png"
        ></v-img>
      </v-col>
      <v-col>
        <div class="text-h1">Daikon</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col><v-btn>Push Me!</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainScreen',

  data: () => ({})
}
</script>
