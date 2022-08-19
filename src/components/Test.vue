<template>
  <div>
    <h1>Sign Up</h1>
    <form action="" @submit="signUp">
      <label for="">Email</label>
      <input type="email" name="email" v-model="email" />

      <label for="">password</label>
      <input type="password" name="password" v-model="password" />
      <button class="signUp" @click="signUp">Submit</button>
      <div class="warningBox"></div>
    </form>
    <p>Have an account already?</p>
    <p><router-link to="/signin">Sign In </router-link></p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: "TestComponent",
  data() {
    return {
      name: "",
      Email: "",
      title: "Takor",
    };
  },
  methods: {
    signUp: function () {
      console.log("man");
      const auth = getAuth();
      console.log(this.email);
      console.log(this.password);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in
          // const user = userCredential.user;
          // ...
          alert("new account created");
          console.log("signed in");
        })
        .catch((error) => {
          console.log("sign in eror");
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          alert(errorCode);
          alert(errorMessage);
          console.log(errorMessage);
          // ..
        });
    },
    loginGoogle() {
      console.log("name");
    },
  },
};
</script>
<style scoped>
label {
  display: block;
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: 600;
}

input {
  border: none;
  background: rgba(128, 128, 128, 0.151);
  width: 20vw;
  height: 5vh;
  outline: none;
}

.submit {
  display: block;
  margin: auto;
  margin-top: 7%;
  border: none;
  height: 3vh;
  width: 8vw;
  border-radius: 2px;
}

#google {
  border: none;
  border-bottom: 1px solid crimson;
  background: none;
}
</style>
