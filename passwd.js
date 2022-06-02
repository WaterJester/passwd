function Wait(Int) {
  return new Promise(resolve => setTimeout(resolve, Int * 1000))
}

const div = document.getElementById("passwd")

async function randomPass(length) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var str = ""
  
  for(var i = 0; i < length; i++) {
    const randomChar = Math.floor(Math.random() * chars.length)
    
    str += chars.charAt(randomChar)
    div.innerText = str
    await Wait(0.1)
  }
  
  return str;
}

const btn = document.getElementById("btn")
const copy = document.getElementById("copy")

randomPass(20)

btn.addEventListener('click', () => {
  randomPass(20)
})

copy.addEventListener('click', () => {
  navigator.clipboard.writeText(div.innerText)
})
