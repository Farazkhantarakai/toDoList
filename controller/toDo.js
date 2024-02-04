import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
// this is used for json parser
app.use(bodyParser.urlencoded({ extended: true }));

let items = [];

app.get("/", (req, res) => {
  res.render("toDo.ejs", {
    toDoItems: items,
  });
});

app.post("/postToDo", (req, res) => {
  const data = req.body;
  items.push(data);
  console.log(items);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
