function randomPass(length) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var str = ""
  
  for(var i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * chars.length)
    
    str += chars.charAt(randomChar)
  }
  
  return str;
}

const div = document.getElementById("passwd")
const btn = document.getElementById("btn")
const copy = document.getElementById("copy")

div.innerText = randomPass(20)

btn.addEventListener('click', () => {
  div.innerText = randomPass(20)
})

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(div.innerText)
})
