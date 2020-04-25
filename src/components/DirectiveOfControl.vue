<template>
  <div id="study-directive">
    <h2>Study Vue directive(Control) </h2>

    <div class="block">
      
      <v-container class="ma-0 pa-0 mx-auto">
        <v-row >
          <v-col class="ma-0 pa-0">
            <v-checkbox label="I have discount code" hide-details="false"  v-model="discount" value="discount"></v-checkbox>
          </v-col>
          <v-col class="ma-0 pa-0">
            <v-text-field v-if="discount" hide-details="false"  class="mt-0"
              name="discountCode"
              label="Discount code"
              id="discountCode"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-0 pa-0">
            <v-radio-group v-model="payment" row hide-details="false" >
              <v-radio :label="`Account`" :value=1></v-radio>
              <v-radio :label="`Card`" :value=2></v-radio>
            </v-radio-group>
          </v-col>
          <v-col class="ma-0 pa-0">
            <div v-show="payment === 1">
              <v-text-field hide-details="false"
                name="Account"
                label="Account number"
                id="accountNumber"
                key="account"
              ></v-text-field>
            </div>
            <div v-show="payment === 2">
              <v-text-field hide-details="false"
                name="Card"
                label="Card number"
                id="cardNumber"
                key="card"
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>


    <div class="block">
      <v-data-table
        dark
        dense
        :headers="tHeaders"
        :items="tItems"
        :items-per-page="itemsPerPage"
        :single-select="singleSelect"
        :hide-default-footer="hideDefaultFooter"
        :search="searchWords"
        class="elevation-1"
        show-select
        pagination.sync="pagination"
        item-key="code"
        loading="true"
      >
        <template v-slot:top>
          <v-toolbar flat color="black">
            <v-toolbar-title primary-title>
              v-data-table
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical color="white" ></v-divider>
            <v-spacer></v-spacer>
            <v-text-field hide-details="false"
              name="search"
              label="Search..."
              id="search"
              v-model="searchWords"
            ></v-text-field>

            <!-- dialog -->
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <!-- dialog button -->
                <v-btn color="primary" class="mb-2" @on="on">New Item</v-btn>
                <v-btn color="primary" class="mb-2" @click="initialize">Reset</v-btn>
              </template>
              <template>
              </template>

              <!-- card -->
              <v-card>
                <!-- card title -->
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <!-- card body -->
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4"><v-text-field v-model="editedTItem.code"  label="Code"> </v-text-field></v-col>
                      <v-col cols="12" sm="6" md="4"><v-text-field v-model="editedTItem.name"  label="Name"> </v-text-field></v-col>
                      <v-col cols="12" sm="6" md="4"><v-text-field v-model="editedTItem.price" label="Price"></v-text-field></v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <!-- action -->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-divider class="mx-4" color="white" ></v-divider>
        </template>
        <template v-slot:item.actions="{item}">
            <v-icon small class="mr-2" @click="editTItem(item)">  mdi-pencil</v-icon>
            <v-icon small class="mr-2" @click="deleteTItem(item)">mdi-delete</v-icon>
        </template>
      
      </v-data-table>



      <v-card-title primary-title>
        plain-table
      </v-card-title>
      <table>
        <th>Code</th>
        <th>Name</th>
        <th>Price</th>
        <tr v-for="i in tItems" :key="i.code">
          <td>{{i.code}}</td>
          <td>{{i.name}}</td>
          <td>{{i.price}}</td>
        </tr>
      </table>

    </div>


    <div class="block">
      <div v-for="s in songs" :key="s.code">
          <header>{{s.title}}</header>
          <div style="white-space:pre-wrap; word-wrap:break-word;">{{s.lyrics}}</div>
          <footer>written by {{s.composer}}</footer>
      </div>
    </div>


    <div class="block">
      <form>
        <v-btn color="primary" @click="listUpdate">update</v-btn>
      </form>
      <ul>
        <li v-for="song in songs" :key="song.code">{{song.title}}</li>
      </ul>
      <hr>
      <ul>
        <li v-for="song in songs2" :key="song">{{song}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    discount:false,
    payment: 1,
    // v-datatable and v-modal
    ////////////////////////////
    singleSelect     : false,
    hideDefaultFooter: false,
    itemsPerPage     : 5,
    searchWords      : "",
    dialog           : false,
    editedIndex      : -1,
    tHeaders: [
      {text: "item code", value: "code",    sortable: false                   },
      {text: "item name", value: "name"                                       },
      {text: "price"    , value: "price",                     align: "end"    },
      {text: 'Actions'  , value: 'actions', sortable: false,  align: "center" }
    ],
    tItems: [
      {code: 111, name: 'item 1', price: 100},
      {code: 222, name: 'item 2', price: 200},
      {code: 333, name: 'item 3', price: 300},
    ],
    defaultTItems: [],
    editedTItem: {
      code: null,
      name: "",
      price: null
    },
    defaultTItem: {
      code: null,
      name: "",
      price: null
    },
    ////////////////////////////
    songs: [
      {code: 111, title: 'item 1', lyrics: `aaaaaaaaaaa\nbbbbbbbbbbbb\nccccccccccc.`},
      {code: 222, title: 'item 2', lyrics: `aaaaaaaaaaa\nbbbbbbbbbbbb\nccccccccccc.`},
      {code: 333, title: 'item 3', lyrics: `aaaaaaaaaaa\nbbbbbbbbbbbb\nccccccccccc.`},
    ],
    songs2: [
      "item 1", "item 2", "item 3"
    ]
  })
  ,watch: {
    // dialog(val) {
    //   val || this.close();
    // }
  }
  ,mounted() {
    this.defaultTItems = Object.assign([], this.tItems);
  }
  ,computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  }
  ,methods: {
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedTItem = Object.assign({}, this.defaultTItem);
        this.editedIndex = -1;
      }, 300)
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tItems[this.editedIndex], this.editedTItem);
      } else {
        this.tItems.push(this.editedTItem);
      }
      this.close();
    },
    editTItem(item) {
      this.editedIndex = this.tItems.indexOf(item);
      this.editedTItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteTItem(item) {
      const index = this.tItems.indexOf(item);
      confirm("Are you sure you want to delete this item") && this.tItems.splice(index, 1);
    },
    initialize() {
      console.log(this.defaultTItems);
      console.log(this.tItems);
      this.tItems = [
        {code: 111, name: 'item 1', price: 100},
        {code: 222, name: 'item 2', price: 200},
        {code: 333, name: 'item 3', price: 300},
      ];
    },
    listUpdate() {
      this.songs[1].title = "hogehoge";
      this.songs2.splice(1,1, "fugafuga");
    }
  }
}
</script>

<style>
div.block {
  border: 1px solid #aaa;
  padding     : 5px;
  margin      : 5px;
}
div {
  /* border : solid 0.1px; */
  border-color: #888;
}
</style>