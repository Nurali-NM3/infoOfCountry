const row = document.querySelector('.row')
const region = document.querySelector('#region')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const btn2 = document.querySelector('.btn2')
const inputBtn = document.querySelector('.input-btn')
const inputBtn2 = document.querySelector('.input-btn2')
const title = document.querySelector('.title')
const title2 = document.querySelector('.title2')
const title3 = document.querySelector('.title3')
const converter =document.querySelector('.converter')
const submit = document.querySelector('.submit')


submit.addEventListener('click',() => {
    let f = converter.value
    fetch(`https://api.exchangerate.host/latest?base=KGS&symbols=USD,EUR,RUB,&amount=${f}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data.rates)



            title.innerHTML = Object.values(data.rates)[0].toFixed(4)
            title2.innerHTML = Object.values(data.rates)[1].toFixed(4)
            title3.innerHTML = Object.values(data.rates)[2].toFixed(4)
        })
})












btn2.addEventListener('click',()=>{
    let a = input.value
    if(a !== ''){

        return row.innerHTML   = ''
    }
})

btn.addEventListener('click',()=>{
    let a = input.value
    console.log(a)

    fetch(`https://restcountries.com/v3.1/region/${ a}`)
        .then(response => response.json())
        .then(data =>{
            data.map(country => {
                console.log(country)
                row.innerHTML += `<div class = "col-4">
                                <div class="box">
                               <div class="wrap-img">
                                    <img src="${country.flags.png}" alt="">
                                </div>
                                    <h3>${country.name.common}</h3>
                                    <div class="info">                          
                                     Capital:<h4>${country.capital[0]}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     Languages:<h4>${Object.values(country.languages)}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     area:<h4>${country.area}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     population:<h4>${country.population}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     Location:<a href="${country.maps.googleMaps}" target="_blank">
                                                gooleMaps
                                              </a>                                 
                                    </div>
                                </div>
                              </div>`
            })

        })
        .catch(function (){

        })
})

inputBtn2.addEventListener('click',()=>{
    let b = region.value
    if(b !== ''){

        return row.innerHTML   = ''
    }
})

fetch(`https://restcountries.com/v3.1/region/europe`)
    .then(response => response.json())
    .then(data =>{
        data.map(country => {
            console.log(country)
            row.innerHTML += `<div class = "col-4">
                                <div class="box">
                               <div class="wrap-img">
                                    <img src="${country.flags.png}" alt="">
                                </div>
                                    <h3>${country.name.common}</h3>
                                    <div class="info">                          
                                     Capital:<h4>${country.capital[0]}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     Languages:<h4>${Object.values(country.languages)}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     area:<h4>${country.area}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     population:<h4>${country.population}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     Location:<a href="${country.maps.googleMaps}" target="_blank">
                                                gooleMaps
                                              </a>                                 
                                    </div>
                                </div>
                              </div>`
        })

    })
     region.addEventListener('change',()=>{
        let con =  region.value

         fetch(`https://restcountries.com/v3.1/region/${ con}`)
             .then(response => response.json())
             .then(data =>{
                 data.map(country => {
                     console.log(country)
                     row.innerHTML += `<div class = "col-4">
                                <div class="box">
                               <div class="wrap-img">
                                    <img src="${country.flags.png}" alt="">
                                </div>
                                    <h3>${country.name.common}</h3>
                                    <div class="info">                          
                                     Capital:<h4>${country.capital[0]}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     Languages:<h4>${Object.values(country.languages)}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     area:<h4>${country.area}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     population:<h4>${country.population}</h4>                                 
                                    </div>
                                    <div class="info">                                  
                                     Location:<a href="${country.maps.googleMaps}" target="_blank">
                                                gooleMaps
                                              </a>                                 
                                    </div>
                                </div>
                              </div>`
                 })

             })

    })




