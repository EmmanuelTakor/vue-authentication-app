<template>
  <div>
    <h1>Sign In</h1>
    <form action="" @click.prevent="signIn">
      <label for="">Email</label>
      <input type="email" name="email" v-model="email" />

      <label for="">password</label>
      <input type="password" name="password" v-model="password" />
      <button class="signUp" @click="signUp">Submit</button>
      <div class="warningBox" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "SignInComponent",
  data() {
    return {};
  },
  methods: {
    signIn: function () {
      console.log("man");
      const auth = getAuth();
      console.log(this.email);
      console.log(this.password);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in
          // const user = userCredential.user;
          // ...
          console.log("signed in");
          alert("signed in");
          this.$router.push("/feed");
        })
        .catch((error) => {
          console.log("sign in eror");
          const errorCode = error.code;
          const errorMessages = error.message;
          console.log(errorCode);
          // alert(errorCode);
          alert(errorMessages);
          console.log(errorMessages);
          // ..
        });
    },
  },
};
</script>

<style></style>
