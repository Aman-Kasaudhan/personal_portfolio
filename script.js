const words=[
    "Web Developer",
    "Data Analyst",
    "Full Stack Developer",
    "Freelancer"
]
const typingtext=document.getElementById("typing-span");

let wordIndex=0,charIndex=0;
let isDeleting=false;
let typingDelay=100,erasinDelay=100,nextwordDelay=1000;

const type=()=>{
    const currentWord=words[wordIndex];
    if(!isDeleting){
        typingtext.textContent=currentWord.substring(0,charIndex+1)
        charIndex++;
        if(charIndex==currentWord.length){
            isDeleting=true;
            setTimeout(type,nextwordDelay)
        }
        else{
            setTimeout(type,typingDelay)
            
        }
    }
    else{
        typingtext.textContent=currentWord.substring(0,charIndex-1)
        charIndex--;
        if(charIndex==0){
            isDeleting=false;
            wordIndex=(wordIndex+1)%words.length
            setTimeout(type,500);
        }
        else{
            setTimeout(type,erasinDelay);

        }

    }
}

document.addEventListener('DOMContentLoaded',()=>{
    if(words?.length) type()
})



const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach((link)=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        /* Active Class */
        navLinks.forEach((nav)=>{
            nav.classList.remove("active");
        });

        link.classList.add("active");

        /* Hide all sections */
        sections.forEach((section)=>{
            section.style.display = "none";
        });

        /* Show selected section */
        const targetSection = document.getElementById(
            link.getAttribute("data-section")
        );

        targetSection.style.display = "flex";

    });

});



const projects = document.querySelectorAll(".project-card");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentProject = 0;

function showProject(index){

    projects.forEach((project)=>{
        project.classList.remove("active-project");
    });

    projects[index].classList.add("active-project");
}

nextBtn.addEventListener("click",()=>{

    currentProject++;

    if(currentProject >= projects.length){
        currentProject = 0;
    }

    showProject(currentProject);

});

prevBtn.addEventListener("click",()=>{

    currentProject--;

    if(currentProject < 0){
        currentProject = projects.length - 1;
    }

    showProject(currentProject);

});

// function downloadResume(){

    
// }

function downloadResume(){
    window.open("assests/aman_resume_college.pdf");

    const link = document.createElement("a");

    link.href = "assests/aman_resume_college.pdf";

    link.download = "aman_resume_college.pdf";

    link.click();
}



