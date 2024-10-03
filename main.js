//import "./styles.css";

const app = document.getElementById("app");

const myForm = document.createElement("form");
myForm.setAttribute("id", "form");
app.appendChild(myForm);

const URL_BASE = "https://jonathan-robles.github.io/api/txt.json";

fetch(URL_BASE)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const label = document.createElement("label");
        const input = document.createElement("input");
              input.setAttribute('name', key);
              input.setAttribute('type', 'text');
        
        label.textContent = key;
        myForm.appendChild(label);
        myForm.appendChild(input);
        myForm.innerHTML += "<br>";
      }
    }
    const subInput = document.createElement("button");
    subInput.innerHTML = 'sub';
    subInput.setAttribute("type", "submit");
    myForm.appendChild(subInput);

  });

  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const result = new FormData(form);
    
    let x = [...result];
      
      x.forEach(function(y){
          document.body.innerHTML += y + '<br>';
      })
  });  




// const form = document.getElementById("form2");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const result = new FormData(form);
//   console.log([...result]);
// });
