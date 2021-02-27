const notes = require("../db/db");
// console.log(notes);

module.exports = (app) => {

    app.get("/api/notes", (req, res) =>{
        console.log("the api get request was called 4")
        res.json(notes)
        console.log(notes);

    });
    app.post("/api/notes", (req, res) =>{
        console.log("the api post request was called 10")
        var idNum = notes.length;
        req.body.id = idNum;
        console.log(idNum);
        console.log(req.body);
        notes.push(req.body);

    });
    app.delete("/api/notes/:id", (req, res) =>{
        console.log("the api delete request was called 17")
        var reqId = req.params.id;
        var noteAry = [...notes];
        console.log(reqId);
        console.log(noteAry);
        for (let [i, note] of notes.entries()) {
            if (note.id === reqId) {
                notes.splice(i, 1);
            }
        }
        console.log(notes)


    })
};