<template>
  <v-layout>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click.stop="navbar.drawer = !navbar.drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">{{page.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-toolbar>

    <v-navigation-drawer class="bg_dark"
      v-model="navbar.drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{navbar.username}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider class="bg_white"></v-divider>

        <v-list-tile
          v-for="item in navbar.items.title"
          :key="item"
          @click="navbar.drawer"
          :to="{path: item.link}"
        >
          <!-- <v-list-tile-action>
            <v-icon>Icone</v-icon>
          </v-list-tile-action> -->

          <v-list-tile-content >
            <v-list-tile-title class="white--text">{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
  
</template>

<script>
  export default {
    name: "Navbar",
    data: () => ({
      page:{
        title: "Swingtrade Helper"
      },
      navbar:{
        drawer: true,
        username: "Cleber KK",
        items:{
          title: [{name: "Home", link: "/"}, {name: "About", link: "/about"}]
        }
      }
      
    })
  }
</script>

<style>
  .bg_dark{
    background: #333 !important;
  }
  .bg_white{
    background: white !important;
  }
</style>
