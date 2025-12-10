//Simple basketball scorebord script

//Point element
let homePointEl = document.getElementById("home-point")
let guestPointEl = document.getElementById("guest-point")

//Team point(s)
let homePoint = 0
let guestPoint = 0

//Assign point values to point element
homePointEl.textContent = homePoint
guestPointEl.textContent = guestPoint

//Home point functions

function homePlusOnePoint() {
  //Add 1 point to home team point
  homePoint += 1
  homePointEl.textContent = homePoint
}

function homePlusTwoPoints() {
  //Add 2 points to home team point
  homePoint += 2
  homePointEl.textContent = homePoint
}

function homePlusThreePoints() {
  //Add 3 points to home team point
  homePoint +=3
  homePointEl.textContent = homePoint
}

//Guest point functions

function guestPlusOnePoint() {
  //Add one point to guest team point
  guestPoint += 1
  guestPointEl.textContent = guestPoint
}

function guestPlusTwoPoints() {
  //Add two points to guest team point
  guestPoint += 2
  guestPointEl.textContent = guestPoint
}

function guestPlusThreePoints() {
  //Add three points to guest team point
  guestPoint += 3
  guestPointEl.textContent = guestPoint
}
