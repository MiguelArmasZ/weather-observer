/* eslint-disable space-before-function-paren */
export function animationRain() {
  const home = document.getElementById('home')

  for (let i = 0; i < 400; i++) {
    const drop = document.createElement('i')
    drop.classList.add('drop')
    home.appendChild(drop)
  }
  const drops = document.querySelectorAll('.drop')

  drops.forEach((drop) => {
    drop.style.left = `${Math.floor(Math.random() * 100)}%`
    drop.style.top = `${Math.floor(Math.random() * -120)}%`
    drop.style.animationDelay = `${
      (Math.random() + 3) * (Math.random() + 2)
    }s`
  })
}
