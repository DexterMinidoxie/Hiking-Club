const uudised = [
  {
    tiitel: 'Grizzlies Vanished From the Cascades Decades Ago. The Feds Want to Bring Them Back.',
    sisu: 'Seven years after the Trump administration ordered an end to it, the National Park Service and Fish and Wildlife Service announced they would once again investigate bringing grizzlies back to the mountains of north-central Washington.',
    autor: 'John Coblet',
    pildidUrl: "./Canvas/backpack1.jpg"
  },

  {
    tiitel: 'Zion National Park Just Found Toxic Bacteria on Two of Its Most Popular Hikes',
    sisu: 'The National Park Service has advised hikers to avoid direct exposure to water colonized by cyanobacteria.',
    autor: 'Adam Roy',
    pildidUrl: "./Canvas/backpack2.jpg"
  },

  {
    tiitel: 'The National Park Service Warns Visitors: Don’t Lick the Toads',
    sisu: 'Sonoran desert toads are one of the largest species of toads in North America, and threatened across parts of their range. Unfortunately for them, some national park visitors have discovered that they also get people high.',
    autor: 'Mark Hault',
    pildidUrl: "./Canvas/backpack3.jpg"
  },

  {
    tiitel: 'One of America’s Least-Visited National Parks May Start Requiring Reservations',
    sisu: 'Following a boost in visitation, Isle Royale National Park is seeking public comment on a plan to begin requiring visitors to reserve campsites in advance.',
    autor: 'Samantha Newet',
    pildidUrl: "./Canvas/backpack4.jpg"
  }
]

function valjastaUudis(uudis) {
  let valjund = `
  <div class="card" style="width:400px">
      <img class="card-img-top" src="${uudis.pildidUrl}"" alt="Card image">
      <div class="card-body">
      <h2 class="card-title">${uudis.tiitel}<h2/>
      <div class="card-text">${uudis.sisu}<div/>
      <h3>${uudis.autor}<h3/>
      <a href="#" class="btn btn-primary">Register</a>
  </div>                  
  </div>
  </div>

  ` 
console.log(valjund)
document.getElementById ('valjund').innerHTML += valjund
  
}

for(let i=0; i < uudised.length; i++) {
  valjastaUudis(uudised[i])
}
