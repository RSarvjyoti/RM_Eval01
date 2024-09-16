let main = document.querySelector(".main");
let toggle = document.getElementById("toggle");
let h4Elements = document.getElementsByTagName("h4"); 

toggle.addEventListener("click", () => {
    let currentBackground = window.getComputedStyle(main).backgroundColor;

    console.log(currentBackground);

    if (currentBackground === "rgb(0, 0, 0)") {
        main.style.backgroundColor = "white";
        
        for (let h4 of h4Elements) {
            h4.style.color = "black";
        }
        
        let dark_mode = document.createElement("img");
        dark_mode.src = "image/light_mode.png";
        toggle.innerHTML = "";
        toggle.append(dark_mode);
    } else {
        main.style.backgroundColor = "black";
        
        for (let h4 of h4Elements) {
            h4.style.color = "white";
        }
        
        let ellipse = document.createElement("img");
        ellipse.src = "image/Ellipse 2938.png";
        toggle.innerHTML = "";
        toggle.append(ellipse);
    }
});
