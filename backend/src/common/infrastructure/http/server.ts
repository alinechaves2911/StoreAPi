
import { env } from "../env";
import { app } from "./app";

app.listen(env.PORT, () =>{
  console.log(`server is running on port ${env.PORT}! 🏆`)
  console.log('API docs available at GET /docs 📚' )
})
