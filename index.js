import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


let Topic = [];
let order = [];
let description = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded());

app.listen(port, () => {
    console.log("Listening on port", port);
});

app.get('/', (req, res) => {
    res.render("index.ejs",{Topics : Topic});
});

app.get("/post", (req, res) => {
    res.render("posts.ejs", {dsc : description});
})

app.post("/done", (req, res) => {
    Topic.push(req.body["Topic"]);
    description.push(req.body["Description"]);
    res.render("added.ejs");
});

app.get("/essay", (req, res) => {
    const index = Number(req.query.index);
   
    res.render("index.ejs", {
            topic: Topic[index],
            desc: description[index]
        });
});

app.get('/delete', (req, res) => {
    res.render("delete.ejs",{Topics : Topic});
});

app.post('/delete', (req, res) => {
    let indexesToDelete = req.body.deleteIndexes;

    if (!Array.isArray(indexesToDelete)) {
        indexesToDelete    = [indexesToDelete];
    }

    indexesToDelete.sort((a, b) => b - a);

    for (const index of indexesToDelete) {
        Topic.splice(index, 1);
        description.splice(index, 1);
    }

    res.render("index.ejs",{Topics : Topic});
});

app.get("/udpate", (req, res) => {
    res.render("update.ejs", {Topics : Topic});
});

app.post("/edit", (req, res) => {
    let UpdatedIndex = Number(req.body.index);
    res.render("update.ejs", {
        index: UpdatedIndex,
        topic: Topic[UpdatedIndex],
        description: description[UpdatedIndex]
    });
});

app.post("/update", (req, res) => {
    let UpdatedIndex = Number(req.body.index);

    Topic[UpdatedIndex] = req.body.Topic;
    description[UpdatedIndex] = req.body.Description;

    res.render("index.ejs",{Topics : Topic});
});
