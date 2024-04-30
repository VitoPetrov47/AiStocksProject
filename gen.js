const fs = require('fs');

const s = [
  {
    imgSrc: '1.jpg',
    name: 'Roberto',
    profit: '$324',
    curBalance: '$922',
  },
  {
    imgSrc: '2.jpg',
    name: 'Ian',
    profit: '$178',
    curBalance: '$568',
  },
  {
    imgSrc: '3.jpg',
    name: 'Fred',
    profit: '$912',
    curBalance: '$1,720',
  },
  {
    imgSrc: '4.jpg',
    name: 'Kristin',
    profit: '$12,301',
    curBalance: '$27,189',
  },
  {
    imgSrc: '5.jpg',
    name: 'Ray',
    profit: '$4,490',
    curBalance: '$9,840',
  },
  {
    imgSrc: '6.jpg',
    name: 'Brent',
    profit: '$32,911',
    curBalance: '$55,780',
  },
  {
    imgSrc: '7.jpg',
    name: 'Felicia',
    profit: '$2,104',
    curBalance: '$4,587',
  },
  {
    imgSrc: '8.jpg',
    name: 'Cody',
    profit: '$27,415',
    curBalance: '$62,395',
  },
  {
    imgSrc: '9.jpg',
    name: 'Brian',
    profit: '$62,233',
    curBalance: '$105,080',
  },
  {
    imgSrc: '10.jpg',
    name: 'Murray',
    profit: '$35,449',
    curBalance: '$68,187',
  },
]

const generateSas = (imageSrc, name, profit , curBalance) => {
  return `
<div class="swiper-slide">

            <div class="slide-card slide-card-user">

              <div class="slide-card-avatar">
                <img src=${imageSrc} alt="avatar"/>
              </div>

              <div class="slide-card-info">
                <h3 class="slide-c-info-name">${name}</h3>
                <p class="slide-c-info-text">Profit: <span class="slide-c-info-price-profit">${profit}</span></p>
                <p class="slide-c-info-text">Current Balance: <span class="slide-c-info-price-balance">${curBalance}</span></p>
              </div>

            </div>

          </div>`
}

const writeObjectToFile = (str, fileName) => {
  fs.appendFile(fileName, str + '\n', (err) => {
    if (err) {
      return err
    }
  });
}


s.forEach((el) => {
  const genStr = generateSas(el.imgSrc, el.name, el.profit, el.curBalance)
  writeObjectToFile(genStr, 'genereted.html')
})