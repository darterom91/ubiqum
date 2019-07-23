<template>
  <div class="bg-white p-2">
    <b-card
    title="Relics begins training"
    img-src="https://cdn.ertheo.com/blog/wp-content/uploads/2016/10/soccer-drills-ertheo.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mx-auto "
  >
    <b-card-text>
      Relics begins training for the next football league. The players are eager to start the championship and release the new kit.
    </b-card-text>
    <b-card>
      <b-form @submit.prevent="enviarMensajes()">
        <b-form-textarea
            id="textarea-auto-height"
            placeholder="Auto height textarea"
            rows="3"
            max-rows="8"
            v-model="text"
            @keyup.enter="enviarMensajes()"
          ></b-form-textarea>
        <b-button block variant="success" type="submit">submit</b-button>
      </b-form>
    </b-card>
    
    <b-card 
      title="Chat"
      class="mt-2 text-center">
      <b-card v-for="(item, index) in messages" :key="index" class="text-left bg-secondary my-2">
        <b-card class="bg-dark text-light">
          {{item.userEmail}}
        </b-card>
        <b-card class="text-dark">
          {{item.text}}
        </b-card>
      </b-card>
    </b-card>
  </b-card>
  </div>
</template>
<script>
import firebase from 'firebase'

const db = firebase.database();
export default {
  name: 'news1',
  data() {
    return {
      userEmail: '',
      text: '',
      messages: []
    }
  },
  created() {
    db.ref('/chat')
    .on('value', snapshot => this.cargarMensajes(snapshot.val())) 
  },
  methods: {
    enviarMensajes(){
      this.userEmail = firebase.auth().currentUser.email
      console.log(this.userEmail);
      db.ref('/chat')
        .push({
          userEmail: this.userEmail,
          text: this.text
        }).then((data) => {
            this.text = '';
            console.log(data.key);
            }
          )
    },
    cargarMensajes(messages){
      console.log(messages);
      this.messages=[];
      for (let i in messages) {
        this.messages.push({
          userEmail: messages[i].userEmail,
          text: messages[i].text
        });
      }
    }
  },
}
</script>