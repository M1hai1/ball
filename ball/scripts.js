let docWidth = document.documentElement.clientWidth;
let docHeight = document.documentElement.clientHeight;
let center = document.querySelector('.center_block')


let directions = [
    'rightToBottom',
    'leftToBottom',
    'rightToTop',
    'leftToTop',
]

let traectory = [
    'horizontal',
    'vertical',
    'horizontal',
]



stepY = [
    1, 3, 1
]
step = [
    3, 1, 3
]
leftCor = [
    200,
    600,
    200
]
topCor = [
    200,
    400,
    600
]





const randomId = function(length) {
    var result = [];
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
    charactersLength)));
   }
   return result.join('');
}

function createBalls() {
    for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * (1 - 1 + 0) + 0)
        makeId = randomId(4)
        let ball = document.createElement('div')
        ball.classList.add('ball')
        // ball.style.backgroundColor = colors[Math.floor(Math.random() * (3 - 0 + 1) + 0)]
        let direction = traectory[i]
        let stepXX = step[i]
        let stepYY = stepY[i]
        ball.setAttribute('data-id', makeId)
        ball.setAttribute('data-direction', direction)


        // ball.style.left = Math.floor(Math.random() * (docWidth - 100 + 1) + 100) + 'px'
        // ball.style.top = Math.floor(Math.random() * (docHeight - 100 + 1) + 100) + 'px'
        ball.style.left = leftCor[i] + 'px'
        ball.style.top = topCor[i] + 'px'
        let dott = document.createElement('div')
        dott.classList.add('dott')
        dott.style.left = leftCor[i] + 'px'
        dott.style.top = topCor[i] + 'px'
        document.body.append(dott)
        document.body.prepend(ball)
        moveHorizontal(makeId, stepXX, stepYY)
    }
}


function directionBall(data) {

    let timeEnd = 2000
    let ball = document.querySelector(`[data-id="${data}"]`)
    let direction = ball.getAttribute('data-direction')
    let start = Date.now()
    let k = Math.random() * (5 - 1 + 0.5) + 0.5
    let x = ball.getBoundingClientRect().left;
    let y = ball.getBoundingClientRect().top;

    // -------------------------------------

    let timer = setInterval(() => {

        let bottom = ball.getBoundingClientRect().bottom
        let left = ball.getBoundingClientRect().left
        let top = ball.getBoundingClientRect().top
        let right = ball.getBoundingClientRect().right





        if (direction === 'rightToBottom') {
            x +=speed
            y +=speed * k
        }
        else if (direction === 'leftToBottom') {
            x -= speed
            y +=speed * k
        }
        else if (direction === 'rightToTop') {
            x += speed
            y -=speed * k
    
        } else if (direction === 'leftToTop') {
            x -= speed
            y -= speed * k
        }

        ball.style.left = x  + 'px'
        ball.style.top = y  + 'px'


        right >= docWidth && direction === 'rightToBottom' ? direction = 'leftToBottom' :
        right >= docWidth && direction === 'rightToTop' ? direction = 'leftToTop' :
        bottom >= docHeight && direction === 'leftToBottom' ? direction = 'leftToTop' :
        bottom >=  docHeight && direction === 'rightToBottom' ? direction = 'rightToTop' :
        left <= 0 && direction === 'leftToTop' ? direction = 'rightToTop' :
        left <= 0 && direction === 'leftToBottom' ? direction = 'rightToBottom' :
        top <= 0 && direction === 'rightToTop' ? direction = 'rightToBottom' :
        top <= 0 && direction === 'leftToTop' ? direction = 'leftToBottom' : undefined
    }, 21)
}

function moveHorizontal(data, step, stepY) {
    let ball = document.querySelector(`[data-id="${data}"]`)
    let x = ball.getBoundingClientRect().left;
    let start = ball.getBoundingClientRect().left;
    let y = ball.getBoundingClientRect().top;
    let direction = ball.getAttribute('data-direction')
    console.log(x)


    let timer = setInterval(() => {
        rangeX = start - x
        rangeY = start - y

        console.log(rangeY)

        if (direction === 'horizontal') {
            x = x + step
            y = y + stepY
            if (rangeY <= -10) { stepY > -1 ? stepY-=0.01 : stepY = -1 }
            else if (rangeY > 10) { stepY < 1 ? stepY +=0.01 : stepY = 1 }   
       
            if (x >= 500) { step < 2 ? step+=0.01 : step = 2 }
            else if (x < 250) { step > -2 ? step-=0.01 : step = -2 }        
        }


        if (direction === 'vertical') {
            x = x + step
            y = y + stepY
            if (rangeY <= -50) { stepY > -2 ? stepY-=0.01 : stepY = -2 }
            else if (rangeY > 250) { stepY < 2 ? stepY +=0.01 : stepY = 2 }   
       
            if (rangeX >= 10) { step < 1 ? step+=0.01 : step = 1 }
            else if (rangeX < -10) { step > -1 ? step-=0.01 : step = -1 }        
        }
        
        ball.style.left = x  + 'px'
        ball.style.top = y  + 'px'
    
    }, 16)

}




createBalls()


