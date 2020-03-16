import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer t43vUdIwPCrHeJsZLxvTF8HFqoOx7mbPYFNqKQAGGT4F_k3mt-Yysfdx-vU2MvO5bpsoMhFwmgOr7yGijtWOoM5-RzNO0bU6kui1P4F215ebRu9NzxUleuBFmBNQXnYx"
  }
});
