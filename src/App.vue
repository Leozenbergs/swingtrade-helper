<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app permanent>
      <v-toolbar color="indigo" flat dark>
        <v-icon>trending_up</v-icon>
        <v-toolbar-title>Swing helper</v-toolbar-title>
      </v-toolbar>
      <v-list dense>
        <v-list-tile router to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile router to="/orders">
          <v-list-tile-action>
            <v-icon>view_list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ordens</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>  
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view :key="$route.fullPath"/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null
  })
};
</script>
