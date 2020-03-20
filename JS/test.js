/*let el =
document.getElementById("start");
el.innerHTML  = "Go";
function person (name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}
var x = new person ("John", 78, 180);
document.write("My name is" + " " + x.name);
let h = "name"
let y = prompt("Whats")
if (h == "name") {
    alert("My name is" + " " + x.name);
*/








global.onclick = function() {
    let global = 
    document.getElementById("global");
    global.innerHTML = "Назад"; 
    var po = ' Назад'
    if( po = 'Назад') {
        global.innerHTML = "Назад"; 
        global.onclick = function() {
            let global = 
            document.getElementById("global");
            global.innerHTML = "Главная";  
            global.href = 'index.html'
        };
    }
    else {
        let global = 
        document.getElementById("global");
        global.innerHTML = "Назад"; 
    }
};
about.onclick = function() {
    let about = 
    document.getElementById("about");
    about.innerHTML = "Назад"; 
    var poі= ' Назад'
    if( poі = 'Назад') {
        about.onclick = function() {
        let about = 
        document.getElementById("about");
        about.innerHTML = "О нас";  
        about.href = "index.html"
        };
    }
    else {
        let about = 
        document.getElementById("about");
        abuot.innerHTML = "Назад"; 
    }
};
partners.onclick = function() {
    let part =
    document.getElementById("partners");
    part.innerHTML = "Назад";
    var pois = 'Назад'
    if (pois = 'Назад') {
        partners.onclick = function() {
            let part =
            document.getElementById("partners");
            part.innerHTML = 'Партнер';
            part.href = "index.html"
    };
}
    else {
        let about = 
        document.getElementById("about");
        abuot.innerHTML = "Назад"; 
    }
};

jsButton.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      text.style.top = timePassed / 5 + 'px';
        function scrool () {
            window.scrollBy(0, 40)
        }
        setTimeout(scrool, 2000)
      if (timePassed > 1000) clearInterval(timer);

    }, 20);
 
  }