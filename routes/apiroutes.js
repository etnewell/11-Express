const path = require("path");
const notes = require("../database.js");
// console.log(notes);
const fs = require("fs");
// const notesSpan = fs.readFile("../database.js", (err) => {
//     if (err) console.error(err);
// });

module.exports = (app) => {

    app.get("/api/notes", (req, res) =>{
        console.log("the api get request was called 4")
        res.json(notes)
        console.log(notes);

    });
    app.post("/api/notes", (req, res) =>{
        console.log("the api post request was called 10")
        var idNum = notes.length + 1;
        req.body.id = idNum;
        console.log(idNum);
        console.log(req.body);
        notes.push(req.body);
        res.json(notes);
    });
    app.delete("/api/notes/:id", (req, res) =>{
        console.log("the api delete request was called 17")
        var reqId = parseInt(req.params.id);

        console.log(reqId);

        // notes.filter(note => {
        //     if(note.id === reqId){
        //         delete note
        //     }
        // })
        var newNotes = notes.filter(note => {
             return note.id !== reqId
        });
        console.log(newNotes);
        notes.length = 0;
        for (var i = 0; i < newNotes.length; i++){
            newNotes[i].id = i+1;
            console.log(newNotes[i])
            notes.push(newNotes[i])
        }
        // // console.log(newNotes);
        // // notes.push(newNotes);
        // console.log(notes);

        // // // console.log(reqId);
        // // // console.log(noteAry);
        // // console.log(newNotes);
        res.json(notes);

        // notes.push(newNotes);
        res.status(204).send;
        // console.log(notes)
    })
};
