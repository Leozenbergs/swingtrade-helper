<template>
  <div>
    <v-toolbar color="indigo" flat dark>
      <v-icon>view_list</v-icon>
      <v-toolbar-title>Ordens</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row>
        <v-flex xs4>
          <v-btn
            class="info"
            @click="newOrderModalOpen= true"
            :disabled="newOrderModalOpen"
          >Nova ordem</v-btn>
          <div class="pl-4" v-if="newOrderModalOpen">
            <form>
              <v-text-field v-model="stock" label="Ação" required></v-text-field>
              <v-text-field v-model="value" label="Valor" required></v-text-field>
              <v-btn class="success" @click="addOrder('call')">Comprar</v-btn>
              <v-btn class="error" @click="addOrder('put')">Vender</v-btn>
            </form>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <OrdersList :orders="orders"/>
  </div>
</template>

<script>
import OrdersList from "@/components/OrdersList.vue";
import { mapState } from "vuex";

export default {
  components: {
    OrdersList
  },
  data: () => ({
    newOrderModalOpen: false,
    stock: null,
    value: null
  }),
  computed: {
    ...mapState({
      orders: state => state.orders
    })
  },
  methods: {
    addOrder(type) {
      let nextId = this.orders.length + 1;

      this.$store.commit("newOrder", {
        type: type,
        id: nextId,
        stock: this.stock,
        value: this.value,
        result: null
      });

      this.cleanData();
    },
    cleanData() {
      this.stock = null;
      this.value = null;
      this.newOrderModalOpen = false;
    }
  }
};
</script>
