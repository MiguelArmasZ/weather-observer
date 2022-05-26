/* eslint-disable space-before-function-paren */
export function animationRain() {
  const body = document.querySelector('body')

  for (let i = 0; i < 400; i++) {
    const drop = document.createElement('i')
    drop.classList.add('drop')
    body.appendChild(drop)

    const drops = document.querySelectorAll('.drop')

    drops.forEach((drop) => {
      drop.style.left = `${Math.floor(Math.random() * 100)}%`
      drop.style.top = `${Math.floor(Math.random() * -120)}%`
      drop.style.animationDelay = `${
        (Math.random() + 1) * (Math.random() + 2)
      }s`
    })
  }
}
