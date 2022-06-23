var innerHex = document.querySelector(".btn")

innerHex.addEventListener ("click", generateRandomColor)



function generateRandomColor() {
      const hex = "0123456789abcdef"
    
      var a = (hex[Math.floor(Math.random() * hex.length)])
      var b = (hex[Math.floor(Math.random() * hex.length)])
      var c = (hex[Math.floor(Math.random() * hex.length)])
      var d = (hex[Math.floor(Math.random() * hex.length)])
      var e = (hex[Math.floor(Math.random() * hex.length)])
      var f = (hex[Math.floor(Math.random() * hex.length)])

        var  qwerty= "#" + a + b + c + d + e + f

      document.querySelector ("span").innerHTML = qwerty

        document.querySelector ("body").style.backgroundColor = qwerty

}