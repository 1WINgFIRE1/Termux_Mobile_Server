const express = require("express")
const app = express();
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("HI I am hosted on a mobile!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
