let search=document.querySelector('.search-box');
document.querySelector('#search-icon').onclick= ()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwBMYCB-Cavd_nnZJlZsF_WQpiSeEGFKarV1BU8nBn9NoVYnGRDVuefnH_YXTDk-V5a/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent Successfully!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

