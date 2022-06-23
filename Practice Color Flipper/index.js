

var htmlButton = document.querySelector (".btn")
htmlButton.addEventListener ("click", generateRandomColor)


function generateRandomColor() {
    
      var simple = ["green", "red", "Rgba(133,122,200)", "#F15025"]
    
      var ex = simple[Math.floor(Math.random () * simple.length)]

      document.querySelector ("span").innerHTML = ex

    document.querySelector ("body").style.backgroundColor = ex
    }
    
    
