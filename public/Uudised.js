function valjastaUudis(uudis) {
  document.getElementById('sisu').innerHTML += `
  <div class="uudis-konteiner">
      <h1>${uudis.tiitel}</h1>
      <div class="autor">
          ${uudis.autor}
      </div>
      <div class="sisu">
          ${uudis.sisu}
      </div>
  </div>
 `
}

async function fetchText() {
  let response = await fetch('/api/Uudised');

  console.log(response.status); 
  console.log(response.statusText); 

  if (response.status === 200) {
      let data = await response.json();
      console.log(data)
      for (i=0; i<data.length; i++) {
          valjastaUudis(data[i])
      }
  }
}

fetchText()

