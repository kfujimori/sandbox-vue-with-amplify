<template> 
  <div>
    <v-container grid-list-xs>
      <v-card >
        <v-card-title primary-title>
          Simple mutation sample
        </v-card-title>
        <v-card-actions>
          <v-btn rounded dark color="blue" value="-" @click="plus">plus</v-btn>
          <v-btn rounded dark color="red" value="-" @click="minus">minus</v-btn>
        </v-card-actions>
        <v-card-text>
          computed: {{count}}
          <br>
          mapState: {{count2}}
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          Use Getters sample.
        </v-card-title>
        <v-card-actions>
          <v-text-field hide-details="false"  class="mt-0"
            name="price"
            label="Search condition price"
            v-model="searchConditionPrice"
          ></v-text-field>
        </v-card-actions>
        <v-card-text>
          Books count is ＜ {{getBooksCount}} ＞
          <br>
          <ul v-for="b in getBooksByPrice(this.searchConditionPrice)" :key="b.isbn">
            <li>{{b.title}} (\{{b.price}}) ISBN : {{b.isbn}}</li>
          </ul>
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          Add book with mutation.
        </v-card-title>
        <v-row>
          <v-col>
            <v-card-actions>
              <v-Form @submit.prevent="addBook" >
                <v-text-field hide-details="false"  class="mt-0" name="isbn" label="ISBN NO" v-model="book.isbn" id="isbn"></v-text-field>
                <v-text-field hide-details="false"  class="mt-0" name="title" label="TITLE" v-model="book.title" id="title"></v-text-field>
                <v-text-field                       class="mt-0" name="price" label="PRICE" v-model.number="book.price" id="price" :rules="priceRules"></v-text-field>
                <v-btn type="submit" color="info" dark>Sync submit!</v-btn>
                <v-btn type="button" @click="asyncAddBook" color="info" dark>Async submit!</v-btn>
              </v-Form>
            </v-card-actions>
          </v-col>
          <v-col>
            <v-list max-height="25px" dense>
              <v-list-item v-for="b in getBooksByPrice(1000000)" :key="b.isbn">
                <v-list-item-content>
                  {{b.title}} (\{{b.price}}) ISBN : {{b.isbn}}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template> 

<script> 

import {mapState, mapGetters} from 'vuex';

export default { 
  data: ()=> ({
    searchConditionPrice: 0,
    book: {
      isbn  : '',
      title : '',
      price : null,
    }
  }),
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState(['count2']),
    ...mapGetters(['getBooksCount', 'getBooksByPrice', 'getBookCountOver3000']),
    priceRules: function() {
      return [v => (v >= 0 && v <= 10000) || "Input number between 0 and 10000 !"]
    }
  },
  methods: {
    plus() {
      this.$store.commit('plus');
    },
    minus() {
      this.$store.commit('minus');
    },
    addBook() {
      this.$store.commit('addBook', {book:
        {
          isbn: this.book.isbn,
          title: this.book.title,
          price: this.book.price,
        }
      })
    },
    asyncAddBook() {
      this.$store.dispatch('addAsync', {book:
        {
          isbn: this.book.isbn,
          title: this.book.title,
          price: this.book.price,
        }
      })
    }
  },
} 
</script> 

<style lang="scss">

</style>