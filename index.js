function shout(string) {
    return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log (`${string.toUpperCase()}`)
    return string.toUpperCase()
}
logShout('hello')

function logWhisper(string) {
    console.log (`${string.toLowerCase()}`)
    return string.toLowerCase()
}
logWhisper('HELLO')


function sayHiToHeadphonedRoommate (String) {
    const string = "Hello!"
    let greeting;
    
    if (String === String.toLowerCase()) 
    {greeting = 'I can\'t hear you!'} 
    else if (String === String.toUpperCase()) 
    {greeting = "YES INDEED!"} 
    else if (String === "Let's have dinner together!") 
    {greeting = "I would love to!"}
    return greeting

}

