const chalk     = require('chalk')
const yargs     = require('yargs')
const notes     = require('./notes.js')
const { getNotes, readNote } = require('./notes.js')

// Configuring yargs

// Version update
yargs.version('1.1.0')

// Add command
yargs.command({
    command: "add",
    describe: "Adds a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        const status = notes.addNote(argv.title,argv.body)
        if(status === 0){
            console.log(chalk.green.inverse.bold("Note added successfully!"))
        }
        else{
            console.log(chalk.red.inverse.bold("Failed to add note!"))
        }
    }
})

// Remove command
yargs.command({
    command: "remove",
    describe: "Deletes a note",
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        const status = notes.deleteNote(argv.title)
        if(status === 0){
            console.log(chalk.green.inverse.bold("Note deleted successfully!"))
        }
        else{
            console.log(chalk.red.inverse.bold("Failed to delete note!"))
        }
    }
})

// List command
yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler: function(){
        console.log(chalk.blue.inverse.bold("Your notes are: "))
        const status = notes.getNotes()
        if(status === 0){
            console.log(chalk.green.inverse.bold("Notes listed successfully!"))
        }
        else{
            console.log(chalk.red.inverse.bold("No notes found to display!"))
        }
    }
})

// Read command
yargs.command({
    command: "read",
    describe: "Reads a specific note",
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        const status = notes.readNote(argv.title)
        if(status === 0){
            console.log(chalk.green.inverse.bold("Note read successfully!"))
        }
        else{
            console.log(chalk.red.inverse.bold("No note found to display!"))
        }
    }
})

yargs.parse()

