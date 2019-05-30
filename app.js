var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

new Vue({
  el: "#app",
  data: {
    username: "Guillaume Bedard",
    date: today,
    newTweet: "",
    tweets: []
  },
  methods: {
    addTweet: function() {
      this.tweets.push(this.newTweet);
      this.newTweet = "";
    }
  },
  mounted() {
    console.log("App is mounted");
    if (localStorage.getItem("tweets"))
      this.tweets = JSON.parse(localStorage.getItem("tweets"));
  },
  watch: {
    tweets: {
      handler() {
        console.log("Tweets changed!");
        localStorage.setItem("tweets", JSON.stringify(this.tweets));
      },
      deep: true
    }
  }
});
