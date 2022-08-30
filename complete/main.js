const app = Vue.createApp({
  data(){
    return {
      title: 'ホーム',
      text: '',
      list: [],
    }
  },
  methods: {
    store(){
      this.list.push({text: this.text, preText: this.text, good: 0})
      this.text = ''
    },
    update(index){
      this.list[index].text = this.list[index].preText
      document.getElementById("exampleModal" + index).click();
    },
    deleteTweet(index){
      this.list.splice(index, 1);
    },
    good(index){
      this.list[index].good++
    }
  }
})

app.mount('#app')