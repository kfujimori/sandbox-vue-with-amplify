export default {
  data () {
    return {
      greeting: '',
      world: 'World'
    }
  },
  computed: {
    hello: function () {
      return this.greeting + ' ' + this.world + '!'
    }
  },
  methods: {
    dataLogger: function() {
      return this.$data;
    }
  },
  created: function() {
    document.title = 'タイトル差し替え';
  }
}