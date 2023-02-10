<template>
  <div class="hello">
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios';
import config from '../configs/config'

export default {
  name: 'HelloWorld',
  data() {
    return {
      info: ''
    }
  },
  props: {
    msg: String
  },
  mounted() {
    axios
      .post(config.baseUrl + '?access_token=' + config.token)
      .then(response => (console.log(response)))
      .catch(err => console.log(err));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
