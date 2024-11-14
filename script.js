/*
const text=[ `I had grown a little bit disappointed when I realized that my work
    would not be taking me in any new, creative design directions. Thankfully, I
    found Shambhavi Mishra and his creativity that goes above and beyond, proving to
    be exactly what I needed to take. Alka chan`, ` Shambhavi Mishra is the best
    designer that I have ever worked with. He is seriously what you would call
    'creative': he innovatively solves all sorts of problems and always delivers
    both prompt and high quality work. I can't recommend him enough! She is good. Araka chan`, `I
    had grown a little bit disappointed when I realized that my work would not be
    taking me in any new, creative design directions. Thankfully, I found Shambhavi
    Mishra and his creativity that goes above and beyond, proving to be exactly what
    I needed to take. Alka chan`, ` Shambhavi Mishra is the best designer that I
    have ever worked with. He is seriously what you would call 'creative': he
    innovatively solves all sorts of problems and always delivers both prompt and
    high quality work. I can't recommend him enough!  She is good. Araka chan`, `I had grown a
    little bit disappointed when I realized that my work would not be taking me in
    any new, creative design directions. Thankfully, I found Shambhavi Mishra and
    his creativity that goes above and beyond, proving to be exactly what I needed
    to take. Alka chan`, ` Shambhavi Mishra is the best designer that I have ever
    worked with. He is seriously what you would call 'creative': he innovatively
    solves all sorts of problems and always delivers both prompt and high quality
    work. I can't recommend him enough!  She is good. Araka chan`]

const text1 = [ ` Shambhavi Mishra is the best designer that I have ever
    worked with. He is seriously what you would call 'creative': he innovatively
    solves all sorts of problems and always delivers both prompt and high quality
    work. I can't recommend him enough!  She is good. Araka chan`,`I had grown a little bit disappointed when I realized that my work
    would not be taking me in any new, creative design directions. Thankfully, I
    found Shambhavi Mishra and his creativity that goes above and beyond, proving to
    be exactly what I needed to take. Alka chan`, ` Shambhavi Mishra is the best
    designer that I have ever worked with. He is seriously what you would call
    'creative': he innovatively solves all sorts of problems and always delivers
    both prompt and high quality work. I can't recommend him enough! She is good. Araka chan`, `I
    had grown a little bit disappointed when I realized that my work would not be
    taking me in any new, creative design directions. Thankfully, I found Shambhavi
    Mishra and his creativity that goes above and beyond, proving to be exactly what
    I needed to take. Alka chan`, ` Shambhavi Mishra is the best designer that I
    have ever worked with. He is seriously what you would call 'creative': he
    innovatively solves all sorts of problems and always delivers both prompt and
    high quality work. I can't recommend him enough!  She is good. Araka chan`, `I had grown a
    little bit disappointed when I realized that my work would not be taking me in
    any new, creative design directions. Thankfully, I found Shambhavi Mishra and
    his creativity that goes above and beyond, proving to be exactly what I needed
    to take. Alka chan` ]

let index = 0;

function updateText(){
    const sliderElement = document.getElementById("testimonials");
    const sliderElement1 = document.getElementById("testimonials1");
    sliderElement.textContent = text[index];
    sliderElement1.textContent = text1[index];
}

function nextPage(){
    index = (index + 1) % text.length;
    updateText();
}

function prevPage(){
    index = (index - 1 + text.length) % text.length;
    updateText();
}

updateText();  

*/

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');


let sectionIndex = 0;

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '% )';

});

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '% )';

});