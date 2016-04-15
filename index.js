'use strict'

const five = require("johnny-five")
const Selfup = require('selfup-rejs')
const rejs = new Selfup
let board, button

board = new five.Board();

board.on("ready", () => {
  rejs.createTable('buttonLog')
  button = new five.Button(2);

  board.repl.inject({
    button: button
  })

  button.on("down", () => {
    rejs.newData('buttonLog', {buttonStatus: "down"})
    console.log("down")
  })

  button.on("hold", () => {
    rejs.newData('buttonLog', {buttonStatus: "hold"})
    console.log("hold")
  })

  button.on("up", () => {
    rejs.newData('buttonLog', {buttonStatus: "up"})
    console.log("up")
  })
})
