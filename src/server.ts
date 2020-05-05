import app from "./app";
import 'dotenv/config'

let port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}`));