import { inc, dec, getCounter } from './counter'

const incBtn = document.createElement('button')
const decBtn = document.createElement('button')
const counter = document.createElement('p')

incBtn.innerText = '+'
decBtn.innerText = '-'
counter.innerText = 0

incBtn.addEventListener('click', () => {
    inc()
    updateCounter()
})

decBtn.addEventListener('click', () => {
    dec()
    updateCounter()
})

const updateCounter = () => {
    counter.innerText = (getCounter())
}

document.body.appendChild(counter)
document.body.appendChild(decBtn)
document.body.appendChild(incBtn)