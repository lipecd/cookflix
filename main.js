// abre e fecha o menu quando clicar no icone(hamburguer e x)
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar o header da página quando der scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

// SHOW/HIDE VIDEOS
function showCortes() {
  var x = document.getElementById('cortesVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showCocçao() {
  var x = document.getElementById('cocçaoVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showConservaçao() {
  var x = document.getElementById('conservaçaoVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showMolhos() {
  var x = document.getElementById('molhosVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showFrança() {
  var x = document.getElementById('françaVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showItalia() {
  var x = document.getElementById('italiaVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showBrasil() {
  var x = document.getElementById('brasilVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

function showJapao() {
  var x = document.getElementById('japaoVideos')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}

// validação form
function validar() {
  var nome = document.getElementById('nome')
  var email = document.getElementById('email')
  var telefone = document.getElementById('telefone')
  var assunto = document.getElementById('assunto')
  var mensagem = document.getElementById('mensagem')
  // const telRegex = (\(?\d{2}\)?\s)?(\d{4,5}\-\d{4});
  // const emailRegex =
  //   /^(\S+)@((?:(?:(?!-)[a-zA-Z0-9-]{1,62}[a-zA-Z0-9])\.)+[a-zA-Z0-9]{2,12})$/

  if (nome.value == '') {
    alert('Nome não informado')

    // Deixa o input com o focus
    nome.focus()
    // retorna a função e não olha as outras linhas
    return
  }
  if (email.value == '') {
    alert('E-mail não informado')
    email.focus()
    return
  }
  // if (email.value != emailRegex) {
  //   alert('E-mail inválido')
  //   email.focus()
  //   return
  // }
  if (telefone.value == '') {
    alert('Telefone não informado')
    telefone.focus()
    return
  }
  // if (telefone.value != telRegex) {
  //   alert('Número de telefone inválido')
  //   telefone.focus()
  //   return
  // }
  if (assunto.value == '') {
    alert('Assunto não informado')
    assunto.focus()
    return
  }
  if (mensagem.value == '') {
    alert('Mensagem não informada')
    mensagem.focus()
    return
  }
  alert('Formulário enviado!')
  // envia o formulário
  //formulario.submit();
}
