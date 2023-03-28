const row = document.querySelector('.row')
const region = document.querySelector('#region')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const btn2 = document.querySelector('.btn2')
const inputBtn = document.querySelector('.input-btn')
const inputBtn2 = document.querySelector('.input-btn2')
const eur = document.querySelector('.eur')
const rub = document.querySelector('.rub')
const kgs = document.querySelector('.kgs')
const usd = document.querySelector('.usd')
const converter =document.querySelector('.converter')
const submit = document.querySelector('.submit')
const valut =document.querySelector('#valut')

console.log(valut.value)
//https://api.exchangerate.host/latest?base=kgs&symbols=USD,EUR
submit.addEventListener('click',() => {

        let money =valut.value
    let f = converter.value || 0
    fetch(`https://api.exchangerate.host/latest?base=${money}&symbols=USD,EUR,RUB,KGS,&amount=${f}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data.rates)
            console.log(data)
            if(money === 'USD'){
                eur.innerHTML = Object.values(data.rates)[0].toFixed(2)
                rub.innerHTML = Object.values(data.rates)[2].toFixed(2)
                kgs.innerHTML = Object.values(data.rates)[1].toFixed(2)
                usd.innerHTML = ''
            }else if(money === 'KGS'){
                eur.innerHTML = Object.values(data.rates)[0].toFixed(2)
                rub.innerHTML = Object.values(data.rates)[2].toFixed(2)
                usd.innerHTML = Object.values(data.rates)[3].toFixed(2)
                kgs.innerHTML = ''
            }else if(money === 'EUR'){
                rub.innerHTML = Object.values(data.rates)[2].toFixed(2)
                kgs.innerHTML = Object.values(data.rates)[1].toFixed(2)
                usd.innerHTML = Object.values(data.rates)[3].toFixed(2)
                eur.innerHTML = ''
            }else if(money === 'RUB'){
                kgs.innerHTML = Object.values(data.rates)[1].toFixed(2)
                usd.innerHTML = Object.values(data.rates)[3].toFixed(2)
                eur.innerHTML = Object.values(data.rates)[0].toFixed(2)
                rub.innerHTML =  ''
            }
            // eur.innerHTML = Object.values(data.rates)[0].toFixed(2)
            // rub.innerHTML = Object.values(data.rates)[2].toFixed(2)
            // kgs.innerHTML = Object.values(data.rates)[1].toFixed(2)
            // usd.innerHTML = Object.values(data.rates)[3].toFixed(2)
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
                                    <h3>${country.name.common.translations.rus}</h3>
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




