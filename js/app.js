console.log('This file is responsible for running your JavaScript')

//google maps api setup here

navigator.geolocation.getCurrentPosition(handleResponse)

function handleResponse(position) {
  console.log(position)
  buildMap(position.coords.latitude, position.coords.longitude)
}

function buildMap(latitude, longitude) {
  var map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 12,
})

  var marker = new google.maps.Marker({
    position: {
      lat: latitude,
      lng: longitude,
    },
    map: map,
  })
}

//MEDITATION MARKERS HERE
function renderMeditationCenterMarkers(centers) {
	centers.forEach(function(center) {
		var centerLat = center.lat / 1000000
		var centerLng = center.lng / 1000000
    
		var marker 
    });
}


//chat bot
//https://hubot.github.com/

//Get a reference to the root of the Firebase Database
var messageAppReference = firebase.database()

$('#message-form').submit(function(event) {
  event.preventDefault()

var message = $('#message').val()   

// Create a section for messages data in your db
var messagesReference = messageAppReference.ref('messages')

  messagesReference.push({
    message: message,
    votes: 0,
    // add a `user` property to each message
    user: firebase.auth().currentUser.displayName,
  })

  $('#message').val('')
})

function getUserMessages() {
  // listens for changes to the `messages` node in the DB
  messageAppReference.ref('messages').on('value', function (results) {
  $('.message-board').empty()

    results.forEach(function (msg) {
      // "un-wrap" data from firebase using .val()
      var message = msg.val()
      var user = msg.val().user
      var id = msg.key
      // create a <li> element
      console.log(message, id)
      var $li = $('<li>').text(message + '-' + user)
    })
  })
}

function updateMessage(id) {
  // find message whose objectId is equal to the id we're searching with
  var messageReference = messageAppReference.ref('messages/' + id)

  // update votes property
  messageReference.update({
    votes: votes,
  })
}

function deleteMessage(id) {
  // find message whose objectId is equal to the id we're searching with
  var messageReference = messageAppReference.ref('messages/' + id)

  messageReference.remove()
}

getUserMessages()

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth())

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function() {
      return false;
    },
  },
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

ui.start('#firebaseui-auth-container', uiConfig)

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    $('#sign-in-container').hide()
    $('#message-board-container').show()
  } else {
    $('#sign-in-container').show()
    $('#message-board-container').hide()
  }
})

$('#sign-out').click(function() {
  firebase.auth().signOut()
})