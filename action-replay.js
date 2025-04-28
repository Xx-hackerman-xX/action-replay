// ==UserScript==
// @name         ActionReplay
// @description  log and replay posts, as your browser saw them
// @version      1.0
// @match        *://*.libpol.org/*
// @run-at       document-idle
// @grant        none
// @icon         data:image/png;base64,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
// @author       github.com/Xx-hackerman-xX
// @downloadurl  https://github.com/Xx-hackerman-xX/action-replay/blob/main/action-replay.js
// @date         2025.04.28
// ==/UserScript==


/*

  fix

    - animation weirdness on replay btn
      - jerks around when transitioning from de-activation rotate into replaying animation

    - spamming the replay button makes the whole post freak out
      - the replays haven't been told to stop cause the stopflag is only ready from classlist... if it's not there when replay wakes up, she'll just keep on goin and they all overwrite eachother
      - need a proper playback management to prevent


  additions

    - settings menu in cogwheel
      - checkbox to remove true delays and make them static (200ms or whatever)
      - button to clear all replays in storage
    - changing settings
      - sets localstorage flag and refreshes
        - tell user that changing anything will refresh
        - doable without refresh? do that
      - flag checked within playback function
      - if true, sub in for our cool static wait time

    - view ticks per word rather than per char
      - run normal replay without any wait until the char we're printing next is a space
      - probably some other weird "word" edge cases but that would be cool in itself

    - add more play controls
      - new playback state handler
        - when a post is told to replay, a little worker will keep track of it
        - when replay finishes, the worker dies
        - worker keeps track of its current playing state, playing index, etc
      - play
        - new worker created
        - starts from start, plays until told to stop
      - pause
        - worker stops playing but keeps track of where she is
      - resume
        - only shows after pause is clicked
        - worker continues operation from the last char it was at
      - tick forward/back
        - how tf do u handle reversing the string??
          - go backward thru the steps, and.... undo it?
            - how to handle splices, where it doesn't say what was removed, only the length of text removed?
            - might be easier to just run through entire process from start up to that index lol

    - new player state, maybe store just in memory
      - nowPlaying: postID
      - state: playing, paused (can be resumed at pauseFrame), stopped
      - pauseFrame: index of postID that was last played

    - optimise steps
      - cut off first n chars of lastSeen unix time
        - max time a post can be alive is 30 mins before it's auto closed
        - 30 mins is 1,800,000 ms, 7 chars
        - full unix time is 12 chars... save 5 whole bytes per replay.... waow....
        - idk if it's worth the cycles lol


  future

    - allow viewing replays from the collection rather than from clicking button
      - big list of em u can scroll thru i guess
      - only really useful for viewing deleted posts (blankposted)
        - could find a list of the deleted posts on this page and let users view replays of deleted posts only thru a lil menu on bottom
        - where are deleted posts stored? probably nowhere... hmmmmm....
        - could see what posts we have stored that are in this thread but not in the posts model
          - need to not include anything offscreen, so check for youngest non-op post in the model and work within that range
      - standalone post to play them in
        - make it look swag please

    - handle images?
      - only rly matters for posts that received an image which was then deleted or #give'd over
      - insertImage message gets sent on user image upload
      - user can only upload one image while editing so not rly useful to log it i don't think

    - time slider control
      - calculate how long the entire post replay is
      - slider which drags you to the closest frame (?)
        - the slider would probably need to work in fixed timestep increments of like 200ms or something

*/





/* core */

// return context-appropriate window.require(path)
function windowRequire(path) {
  try {
    window.require(path)
  } catch {
    // we're on a page that requires client/ to be prepended for whatever reason
    path = "client/" + path
  }
  return window.require(path)
}

// say hello in console
function announceScriptName() {
  console.log(`%c[[ ${GM_info.script.name} v${GM_info.script.version} loaded ]]`, "color:magenta; background:black;")
}

// async sleep
const sleep = ms => new Promise(res => setTimeout(res, ms))

// split array at index. stolen from https://stackoverflow.com/a/38757490
const splitAt = (index, xs) => [xs.slice(0, index), xs.slice(index)]

// websocket message flags. stolen from vanilla message handler definition
const message = {
	invalid: 0,
	insertPost: 1,  // new post
	append: 2,  // add character
	backspace: 3,  // remove chararcter
	splice: 4,  // remove section of text
	closePost: 5,  // stop editing post
	insertImage: 6,
	spoiler: 7,
	moderatePost: 8,
	moveImageFrom: 9,
	moveImageTo: 10,
	exchangeImages: 11,
	modifyPosts: 12,
	commandUpdate: 13,
	synchronize: 30,
	reclaim: 31,
	postID: 32,
	concat: 33,
	NOOP: 34,
	syncCount: 35,
	serverTime: 36,
	redirect: 37,
	notification: 38,
	synchronizeTime: 39,
	captcha: 40,
	boardTV: 41,
	configs: 42,
	setCookie: 43,
	sendDM: 44,
	action: 45,
	watchSubscription: 46,
	watchCancelSubscription: 47,
	watchData: 48,
	staffAction: 49,
	boardUpdate: 50,
	imageGeneration: 51,
	postConfUpdate: 52,
	incrementCounter: 53,
	pulse: 54,
	clientData: 55,
	pollData: 56,
}

// "reverse" the message obj for easy lookup of message flags into their human-readable name
var messageLookup = {}
for (const [key, value] of Object.entries(message)) {
  messageLookup[value] = key
}

// svg replay icon
const SVG_REPLAY = `<svg class="svg-refresh" viewBox="0 0 24 24" fill="none"><path d="M12 21C7.02944 21 3 16.9706 3 12C3 9.69494 3.86656 7.59227 5.29168 6L8 3M12 3C16.9706 3 21 7.02944 21 12C21 14.3051 20.1334 16.4077 18.7083 18L16 21M3 3H8M8 3V8M21 21H16M16 21V16"/></svg>`

// localstorage size limit. most browsers limit localstorage to 5/10mb per domain but i'd rather never hit the limit at all
const LOCALSTORAGE_LIMIT = 3 * 1024 * 1024  // 3MB

// vanilla function, replaced later
var vanilla_socket_onmessage = null

// replay step flags. always integers to distinguish from appends (chars) or splices (arrays)
const STEP_BACKSPACE = 1  // backspace key
// const STEP_IMAGE = 2  // insert image

// playback flags
// var playbackStop = false

// yell in console if true
const VERBOSE_LOG_SOCKETS = false  // websocket messages
const VERBOSE_LOG_LOCALSTORAGE = false  // localstorage calls





/* shimming */

function replaceSocketOnmessage() {
  // replace vanilla socket.onmessage with our own
  vanilla_socket_onmessage = windowRequire("connection/state").socket.onmessage  // save
  windowRequire("connection/state").socket.onmessage = modified_socket_onmessage  // shim
  console.log("socket.onmessage replaced :)")  // hooray
}

async function doTheShim(delay=10) {
  // keep trying to shim our function in there until it succeeds
  // will often fail cause window.require hasn't loaded or the method itself isn't defined in vanilla js yet
  // logs final time it took to console. my testing gets between 20-50ms
  let totalTime = 0
  while (true) {
    try {
      replaceSocketOnmessage()
      break  // succeeded, bail
    } catch {
      await sleep(delay)  // wait a mo and try again
      totalTime += delay
    }
  }
  console.log("shim took " + totalTime + "ms")
}

function modified_socket_onmessage({data: e}, concatMessage=false) {
  // our modified socket.onmessage function. grabs the messages we care about and passes everything back to vanilla js as it was received
  let flag = e[0].codePointAt()  // convert to int cause comparing unprintable characters is weird
  let payload = e.slice(1)

  // will be set to a postID if this is an insertPost message, cause that post will need a new shiny replay button
  // has to be done AFTER it's all handled by vanilla, cause she will insert the post into dom for us
  // insertpost message is sent for any new message, from us or from someone else :) handy!
  let needsReplayButton = null

  // separate concatenated payloads and execute them separately
  if (flag === message.concat) {
    payload = JSON.parse(payload)
    if (VERBOSE_LOG_SOCKETS) { console.log(`%c[CONCAT] len: ${payload.length}`, "color:green") }
    for (const msg of payload) {
      modified_socket_onmessage({data: msg}, concatMessage=true)  // unroll and process each msg on our side
    }
    vanilla_socket_onmessage({data: e})  // send the original unrolled concat straight to vanilla js
    return
  }

  // insert new post
  if (flag === message.insertPost) {
    payload = JSON.parse(payload)
    if (VERBOSE_LOG_SOCKETS) { console.log(`%c[INSERTPOST] id: ${payload.id}, text: '${payload.body}'`, "color:lime") }
    appendReplay(payload.id, String(payload.body))
    needsReplayButton = payload.id  // go go gadget insert replay button
  }

  // append character to post
  else if (flag === message.append) {
    let parts = payload.split(',')
    let postID = parts[0]
    let char = String.fromCharCode(parts[1])  // what user typed
    if (VERBOSE_LOG_SOCKETS) { console.log(`%c[APPEND] char: '${char}', postID: ${postID}`, "color:lime") }
    appendReplay(postID, String(char))
  }

  // backspaces
  else if (flag === message.backspace) {
    if (VERBOSE_LOG_SOCKETS) { console.log(`%c[BACKSPACE] id: ${payload}`, "color:lime") }
    appendReplay(payload, STEP_BACKSPACE)
  }

  // spliced (section of text changed in a single step)
  else if (flag === message.splice) {
    payload = JSON.parse(payload)
    if (VERBOSE_LOG_SOCKETS) { console.log(`%c[SPLICE] id: ${payload.id}, start: ${payload.start}, len: ${payload.len}, text: ${payload.text}`, "color:lime") }
    let value = [
      payload.start,  // start index of change
      payload.len,  // length of text removed from index. can be zero (addition only)
      payload.text  // text that replaces the removed text. can be blank (deletion only)
    ]
    appendReplay(payload.id, value)
  }

  // post closed
  else if (flag === message.closePost) {
    payload = JSON.parse(payload)
    if (VERBOSE_LOG_SOCKETS) { console.log(`%c[CLOSED] id: ${payload.id}`, "color:lime") }
    refreshStats()
  }

  // something else, just log
  else {
    if (VERBOSE_LOG_SOCKETS) { console.log(`%cflag: ${messageLookup[flag]} (${flag})\npyld: ${payload}`, "color:green") }
  }

  // send the data on to vanilla js as usual, if it's a single (unconcatenated) message
  // any concat messages are sent to vanilla when initially handled above
  // i don't think it would be terrible to unroll each concat but i'd rather not break shit
  if (!concatMessage) {
    vanilla_socket_onmessage({data: e})
  }

  // add replay button to new posts, from us or from others
  if (needsReplayButton) {
    addReplayButtonToPostID(needsReplayButton)
  }
}







/* storage management */

function getSizeLocalstorage() {
  // return total size of localstorage used in bytes
  return new Blob(Object.values(localStorage)).size
}

function getFractionFullLocalstorage() {
  // return float percent of localstorage that is full (according to our arbitrary limit)
  return getSizeLocalstorage() / LOCALSTORAGE_LIMIT
}

function lightenLocalstorage() {
  // trim replays from localstorage if we're over the limit
  const initialSize = getSizeLocalstorage()
  if (initialSize < LOCALSTORAGE_LIMIT) {
    return
  }
  const fractionFreeGoal = 0.1  // want at least this much free space
  let postIDs = getAllReplayIDs()  // pre-sorted, oldest to newest
  // keep trimming until we run out of posts, or we're below our goal size free
  while (postIDs.length && (getFractionFullLocalstorage() > (1-fractionFreeGoal))) {
    let oldestReplay = postIDs[0]
    console.log(`storage too big (${getFractionFullLocalstorage()*100}%), trimming reply id ${oldestReplay}`)
    deleteReplay(oldestReplay)
    postIDs = postIDs.slice(1)  // slice off first replay
  }
  const newSize = getSizeLocalstorage()
  console.log(`finished trimming, reduced size from ${initialSize} bytes to ${newSize} bytes`)
}

function refreshStats() {
  // update the stats elm in bottom right
  lightenLocalstorage()  // lighten the load before we do anything
  let totalReplays = getAllReplayIDs().length
  let percentUsed = getFractionFullLocalstorage() * 100  // x100 for display
  percentUsed = parseFloat(percentUsed).toFixed(1)  // crunch down to string with one decimal
  // set minimum display of 0.1% for lookz
  if (totalReplays && percentUsed === "0.0") {
    percentUsed = "0.1"
  }
  // let text = `${totalReplays} replays stored (${percentUsed}% full)`
  let text = `${totalReplays} replays stored`
  updateFooterStats(text)
}

function updateFooterStats(text) {
  // add new footer elm with stats text
  let footerStatsElm = document.getElementById("replay-stats")
  // just update text if elm is there already
  if (footerStatsElm) {
    footerStatsElm.innerText = text
    return
  }
  // add stats elm to footer
  let span = document.createElement("span")
  span.id = "replay-stats"
  span.classList.add("act")
  span.style.marginLeft = "auto"  // push it over to the right
  span.innerText = text
  let footer = document.getElementsByClassName("bottom-margin")[0]
  footer.appendChild(span)
}








/* action storage */


// prefix for replay data in localstorage
// each replay has its own localstorage key cause i don't like the idea of pulling out 2mb of data, appending one character, then writing 2mb back to localstorage for EVERY character typed
// as far as i can tell localstorage does not have a limit on number of entires, only on total size. maybe that differs per browser idk
// this clutters up localstorage with keys but if you care abt that then u have bigger problems darling
const REPLAY_PREFIX = "replay"
const SEPARATOR = "_"

// template empty replay with all the stuff we want
// it's stringified cause i was having issues where this template was getting edited and causing chaos...
// when we want a new copy of the obj, we just JSON.parse this string
const EMPTY_REPLAY = JSON.stringify({
  steps: [],  // replay steps (add char, backspace, etc)
  waits: [],  // wait time before each step at same index
  lastSeen: null  // unix time of last step inserted
})


function key(postID) {
  // return localstorage key for this postID
  return [REPLAY_PREFIX, postID].join(SEPARATOR)  // "replay_12345"
}

function getReplay(postID) {
  // return data stored for given postID
  if (VERBOSE_LOG_LOCALSTORAGE) { console.log(`%cgetting storage for id ${postID}:\n${localStorage.getItem(key(postID))}`, "color: magenta") }
  return JSON.parse(localStorage.getItem(key(postID))) || JSON.parse(EMPTY_REPLAY)
}

function setReplay(postID, replayObject) {
  // set replay data for given postID
  if (VERBOSE_LOG_LOCALSTORAGE) { console.log(`%csetting storage for id ${postID}:\n${JSON.stringify(replayObject)}`, "color:cyan") }
  localStorage.setItem(key(postID), JSON.stringify(replayObject))
}

function getAllReplayIDs() {
  // return array of postIDs for which we have replays
  let replayIDs = []
  const prefix = REPLAY_PREFIX + SEPARATOR
  for (const key of Object.keys(localStorage)) {
    if (key.includes(prefix)) {  // might be a faster way of searchin for this but it works...
      replayIDs.push(Number(key.split(SEPARATOR)[1]))  // parse out just int postID
    }
  }
  replayIDs.sort()  // youngest to oldest for convenience
  return replayIDs
}

function haveReplayFor(postID) {
  // true if we have a replay for given postID
  return getAllReplayIDs().includes(Number(postID))
}

function deleteReplay(postID) {
  // delete a specific replay from the storage
  localStorage.removeItem(key(postID))
}

function deleteAllReplays() {
  // remove every replay from storage
  const prefix = REPLAY_PREFIX + SEPARATOR
  for (const key of Object.keys(localStorage)) {
    if (key.includes(prefix)) {
      localStorage.removeItem(key)
    }
  }
}

function appendReplay(postID, step) {
  // append step to this post's replay in storage
  // step can be string (user text input), int (special flag, defined above), or array (splice action)
  // relative time between actions is calculated by diffing unix time now and unix time at last keystroke
  let replay = getReplay(postID)
  let timeNow = Date.now()
  let wait
  // brand new replays have a null lastSeen
  if (replay.lastSeen === null) {
    wait = 0  // the wait before first char is always zero for simplicity of replaying, even tho it's extraneous...
  } else {
    wait = timeNow - replay.lastSeen  // relative time diff between previous and current step
  }
  replay.steps.push(step)
  replay.waits.push(wait)
  replay.lastSeen = timeNow
  setReplay(postID, replay)  // save
}







/* action replay */

const LOVELY_CSS = `
#action-replay {
  padding: 4px;
  border: white 2px solid;
  position: fixed;
  bottom: 100px;
  right: 100px;
  display: flex;
  width: 400px;
  flex-direction: column;
  background: lightgrey;
}

#replay-selection {
  border: solid skyblue 2px;
  margin-bottom: 4px;
  background: black;
  display: flex;
  flex-direction: column;
  padding: 1em;
  font-size: 14px;
}

#replay-post {
  padding: 1em;
  font-size: 14px;
  background: black;
  border: solid skyblue 2px;
  color: grey;
  word-wrap: break-word;
  min-height: 4em;
}

#replay-post.playing {
  color: white;
  border-color: lime;
}

#action-replay span {
  color: black;
  text-align: center;
}

.replay-button {
  display: initial;
  position: relative;
  margin-left: 0.15em;
  margin-right: 0.5em;
  color: var(--text-color);
  transition: 0.1s;
}
article:not(.reply-form):hover .replay-button {
  opacity: 1;
}

.svg-refresh {
  width: 14px !important;
  height: auto !important;
  stroke: var(--text-color);
  stroke-width: 3;
  stroke-linecap: round;
  fill: none !important;
  transition: 0.1s;
}

/* replay exists */
article:not(.replaying) .replay-button:hover:not(.invalid) .svg-refresh {
  transform: rotate(25deg);
  stroke: lightgreen;
}
article:not(.replaying) .replay-button:active:not(.invalid) .svg-refresh {
  transform: rotate(80deg);
  stroke: lime;
}

/* replay does not exist */
.replay-button.invalid .svg-refresh {
  stroke: #F08080;
}
.replay-button.invalid:hover .svg-refresh {
  stroke: red;
  cursor: not-allowed;
}

/* replaying post */
article.replaying .replay-button {
  opacity: 1;
}
article.replaying .svg-refresh {
  animation: spin 3s linear infinite;
  stroke: lime;
}

@keyframes spin {
  100% {transform: rotate(360deg)}
}

/* tooltip */
.replay-button:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 100%;
  margin-left: 10px;
  width: auto;
  padding: 3px 6px;
  border-radius: 9px;
  background: black;
  color: white;
  text-align: center;
  opacity: 0;
  transition: 0.2s;
  pointer-events: none;
}
.replay-button:hover:before {
  opacity: 1;
}
/* tooltip text */
.replay-button:not(.invalid):before {
  content: "click to replay post";
}
.replay-button.invalid:before {
  content: "no replay found ;(";
  background: darkred;
}
article.replaying .replay-button:before {
  content: "stop replay";
  background: darkgreen;
}
`


function addCSS() {
  // oo aa so pretty
  let style = document.createElement("style")
  style.innerText = LOVELY_CSS
  document.head.append(style)
}


function createButtonElement(label, clickFunction) {
  // simple button factory cause i don't like writing document.createElement a billion times
  let button = document.createElement("button")
  button.innerText = label
  button.addEventListener("click", clickFunction)
  return button
}


function addReplayBox() {
  // add box that posts can be replayed within
  // depreciated in favour of playing within post itself but will eventually be used to display deleted post content
  let parent = document.createElement("div")
  let selectionControls = document.createElement("div")
  let replay = document.createElement("div")
  let replayControls = document.createElement("div")

  parent.id = "action-replay"
  selectionControls.id = "replay-selection-controls"
  replay.id = "replay-post"
  replayControls.id = "replay-post-controls"

  // clear all replays from storage
  let buttonClearReplays = createButtonElement(
    "clear replays", () => {
      if (confirm("really delete all replays?")) {
        deleteAllReplays()
        refreshStats()
      }
    }
  )

  // stop playback
  let buttonStop = createButtonElement(
    "stop", () => {
      // playbackStop = true
      document.getElementById("replay-post").classList.remove("playing")
    }
  )

  selectionControls.append(buttonClearReplays)
  replayControls.append(buttonStop)
  parent.append(
    selectionControls,
    replay,
    replayControls
  )
  document.body.append(parent)
}


function createReplayButton() {
  // return a fresh shiny replay button for us to insert into a post
  let replayButton = document.createElement("a")
  replayButton.classList.add("svg-link", "noscript-hide", "concealed", "replay-button")
  // replayButton.title = "Replay this post"
  replayButton.innerHTML = SVG_REPLAY
  replayButton.addEventListener("click", (clickEvent) => {
    // check button state before replaying anything
    // ignore invalid replays
    let link = clickEvent.target.closest(".replay-button")
    if (link.classList.contains("invalid")) {
      return
    }
    // double check the validity of this replay (may have been deleted recently)
    let postID = clickEvent.target.closest("article").id.slice(1)  // slice leading "p"
    if (!haveReplayFor(postID)) {
      link.classList.add("invalid")
      // link.title = "No replay available :("
      return
    }
    // all clear
    replayPost(postID)
  })
  return replayButton
}


function addReplayButtonToPostID(postID) {
  // add a replay button into the header of given postID
  let postHeader = document.querySelector(`#p${postID} header`)
  // post doesn't exist...
  if (!postHeader) {
    console.error("tried to add replay button to nonexisted post, id: " + postID)
    return
  }
  // button exists already
  if (postHeader.querySelector(".replay-button")) {
    console.error("tried to add replay button but post already has it, id: " + postID)
    return
  }
  postHeader.append(createReplayButton())

}


async function addReplayButtonToPosts() {
  // add replay button to existing posts already on the page
  while (!Object.keys(windowRequire("state").posts.models).length) {
    // wait here until posts model is populated
    await sleep(100)  // probably a better way to do this.....
  }
  let allPosts = windowRequire("state").posts.models
  let savedReplayIDs = getAllReplayIDs()  // so we only pull localstorage once while adding all deez buttons
  for (let postID in allPosts) {
    let postElm = document.getElementById(`p${postID}`)
    let header = postElm.getElementsByTagName("header")[0]
    let replayButton = createReplayButton()
    // if post is being edited as we load the page, nab its current text as the base for our replay
    if (allPosts[postID].editing) {
      let currentText = allPosts[postID].body
      deleteReplay(postID)  // clobber whatever's there... clean slate to avoid timing problems or missing text
      appendReplay(postID, currentText)
    }
    // if postID not in our list, it's invalid and can't be played
    else if (!savedReplayIDs.includes(Number(postID))) {
      replayButton.classList.add("invalid")
      // replayButton.title = "No replay available :("
    }
    header.append(replayButton)
  }
}


async function replayPost(postID) {
  // replay keystrokes of a post, within itself

  // ignore clicks while user is editing their own post
  if (postID === "p0"){
    return
  }

  let replay = getReplay(postID)
  let post = document.getElementById(`p${postID}`)

  // add a new blockquote that will display the replay within the post body
  let realBlockquote = post.querySelector(".post-container blockquote:not(.replay)")
  let replayBlockquote = post.querySelector("blockquote.replay")

  // add the replay fella if he's not there yet
  if (replayBlockquote === null) {
    replayBlockquote = document.createElement("blockquote")
    replayBlockquote.classList.add("replay")
    replayBlockquote.style.display = "none"
    realBlockquote.insertAdjacentElement("beforebegin", replayBlockquote)
  }

  // stop post if it's already playing
  if (post.classList.contains("replaying")) {
    // duplicate of code below that restores original state after replay finished... should be possible to make nice logic that skips over it but this is fine for now
    replayBlockquote.classList.add("stop")
    replayBlockquote.style.display = "none"
    realBlockquote.style.display = ""
    post.classList.remove("replaying")
    if (!windowRequire("state").posts.models[postID].editing) {
      post.classList.remove("editing")
    }
    return
  }

  // store the accumulated final text in memory while it's playing
  let currentPost = ""

  // set everyone up for playback
  replayBlockquote.style.display = ""
  realBlockquote.style.display = "none"
  post.classList.add("editing")  // for purplepost aesthetic
  post.classList.add("replaying")  // for our replay button to stay visible

  // process each step of the replay
  for (let i=0; i<replay.steps.length; i++) {
    const step = replay.steps[i]
    const wait = replay.waits[i]
    currentPost = processReplayStep(currentPost, step)

    // each wait value is the time BEFORE its associated step
    await sleep(wait)

    // process playback flags
    if (replayBlockquote.classList.contains("stop")) {
      console.log("stopped")
      replayBlockquote.classList.remove("stop")
      break
    }

    // display next step
    replayBlockquote.innerText = currentPost
  }

  // finished playing
  await sleep(500)  // aesthetic only so it doesn't snap back as soon as the last char is printed

  // restore original state
  replayBlockquote.style.display = "none"
  realBlockquote.style.display = ""
  post.classList.remove("replaying")
  // remove editing state after playback, if the post isn't actually being edited rn
  if (!windowRequire("state").posts.models[postID].editing) {
    post.classList.remove("editing")
  }
}


function processReplayStep(baseString, value) {
  // process our values and spit out the modified baseString

  // simple append
  if (typeof value === "string") {
    baseString += value

  // raw number, check against our step flags
  } else if (typeof value === "number") {
    // backspace: remove last char
    if (value === STEP_BACKSPACE) {
      baseString = baseString.slice(0, -1)
    // ???
    } else {
      console.error("unknown integer flag: " + value)
    }

  // splice
  } else if (typeof value === "object" && value.constructor === Array) {
    let [start, len, text] = value
    let [left, right] = splitAt(start, baseString)  // split at start index
    right = right.slice(len)  // trim len chars from beginning of the right string
    baseString = left + text + right  // smoosh it all back together

  // ???
  } else {
    console.warn("unknown type for this value: " + value)
  }

  return baseString
}




async function main() {
  announceScriptName()
  await doTheShim()

  addCSS()

  setTimeout(async () => {await addReplayButtonToPosts()}, 1000)

  refreshStats()

}

main()


