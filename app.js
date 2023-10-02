const sections = document.querySelectorAll('.section') // Selects all elements with class "section"
const sectBtns = document.querySelectorAll('.controls') 
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content') // Selects the first element with class "main-content"

const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_dhupcyi'
const templateId = 'template_3pamtlk'
const apikey = 'xfc9RPFhB2p6lmqyg'

function pageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            // Removes the class 'active-btn'
            currentBtn[0].classList.remove('active-btn')
            // Adds the class 'active-btn' to the clicked button. this refers to the clicked button
            this.classList.add('active-btn')
        })
    }

    // Sections Active Class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        console.log(id)
        if(id){
            console.log(e.target);
            // Removes selection from the other button
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}

pageTransitions()

function sendEmail(event) {
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId, templateId, frmEmail, apikey)
    .then(result => Swal.fire('Your message has been sent!'))
    .catch(error => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      }))
}
