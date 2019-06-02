<template>
  <div>
    <v-container>
      <v-layout v-if="activesOrders.length" row>
        <v-flex xs12>
          <v-card>
            <v-list class="pb-0" subheader two-line>
              <div>
                <v-subheader>Orderns ativas</v-subheader>
              </div>
              <v-divider></v-divider>

              <div v-for="order in activesOrders" :key="order.id">
                <div>
                  <v-list-tile>
                    <v-list-tile-content>
                      <div class="d-inline-flex">
                        <v-list-tile-title class="mt-2 d-inline-flex">
                          <v-icon
                            :color="order.type === 'call' ? 'green' : 'red'"
                            class="mr-1"
                          >{{order.type === 'call' ? 'trending_up' : 'trending_down'}}</v-icon>
                          <v-layout column>
                            <v-flex>
                              <span
                                :class="order.type === 'call' ? 'green--text' : 'red--text'"
                              >{{order.type === 'call' ? 'Ordem de compra' : 'Ordem de venda'}}</span>
                              <span>
                                {{
                                order.stock
                                }} por R$ {{ order.value }}
                              </span>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-title>
                      </div>
                    </v-list-tile-content>
                    <v-flex>
                      <div class="d-inline-flex">
                        <v-text-field
                          class="mt-1"
                          v-model="order.valueFinal"
                          label="Valor Atual"
                          required
                        ></v-text-field>
                        <v-btn @click="finish(order)" color="primary" small class="mt-3">
                          <span>Encerrar</span>
                        </v-btn>
                      </div>
                    </v-flex>
                  </v-list-tile>

                  <v-divider></v-divider>
                </div>
              </div>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout class="mt-3" v-if="finishedOrders.length" row>
        <v-flex xs12>
          <v-card>
            <v-list class="pb-0" subheader two-line>
              <div>
                <v-subheader>Orderns encerradas</v-subheader>
              </div>
              <v-divider></v-divider>

              <div v-for="order in finishedOrders" :key="order.id">
                <div>
                  <v-list-tile>
                    <v-list-tile-content>
                      <div class="d-inline-flex">
                        <v-list-tile-title class="mt-2 d-inline-flex">
                          <v-icon
                            :color="order.type === 'call' ? 'green' : 'red'"
                            class="mr-1"
                          >{{order.type === 'call' ? 'trending_up' : 'trending_down'}}</v-icon>
                          <v-layout column>
                            <v-flex>
                              <span
                                class="mr-1"
                                :class="order.type === 'call' ? 'green--text' : 'red--text'"
                              >{{order.type === 'call' ? 'Ordem de compra' : 'Ordem de venda'}}</span>
                              <span>{{order.stock}} lucrou {{order.result}}</span>
                            </v-flex>
                          </v-layout>
                        </v-list-tile-title>
                      </div>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-divider></v-divider>
                </div>
              </div>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["orders"],
  computed: {
    activesOrders() {
      return this.orders.filter(order => order.result === null);
    },
    finishedOrders() {
      console.log(this.orders.filter(order => order.result !== null));
      return this.orders.filter(order => order.result !== null);
    }
  },
  methods: {
    finish(order) {
      this.$store.commit("finishOrder", order);
    }
  }
};
</script>
