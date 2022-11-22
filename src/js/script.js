const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', (e) => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll('.usework__skill-percent'),
      lines  = document.querySelectorAll('.usework__skill-line span');

counters.forEach((item, i) => {
    if(parseInt(item.innerHTML) <= 100) {
        lines[i].style.width = item.innerHTML; 
    }else if(parseInt(item.innerHTML) > 100) {
        lines[i].style.width = '100%'
    }
})


// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

    })
}

// Прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__item[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.hamburger').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.toggle('_lock');
                iconMenu.classList.toggle('_active');
                menuBody.classList.toggle('_active');
            }
            console.log('click')
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


// console.log(   parseInt("2131"))

// let a = Boolean(0)

// console.log(a)

let obj = {
    'name': 'Alex',
    'age': 12
}

obj.for = '12'  

console.log(obj.for)

for (const iterator in obj) {
    console.log(iterator + obj[iterator])
}

let nums = [1,2,3,4,6]

nums.push(7)
console.log(nums)

for (const iterator of nums) {
    console.log(iterator)
}

function test(a) {
    let name = a || 'Alex'
    return name
}
console.log(test())

function add(...args) {
    console.log(args[3])
    let sum = 0;
    for (const value of args) {
        sum += value
    }

    return sum
}

let res = add(1, 4, 5)
console.log(res)


let makePerson = (first, last) => {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    }
}
s = makePerson("Simon", "Willison")
console.log(s.fullName()); // Simon Willison
console.log(s.fullNameReversed()); // Willison, Simon


function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function fullName() {
    return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function fullNameReversed() {
    return this.last + ', ' + this.first;
}

d = new Person("Simon", "Willison");

Person.prototype.firstNameCaps = function() {
    return this.first.toUpperCase()
}
console.log(d.firstNameCaps()); // "SIMON


let result = ''
for(let i = 1; i < 7; i++) {

    for(let j = 0; i > j; j++) {
        result += '*'
    }

    result += '\n'
}

console.log(result)

first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`)
        for (let k = 0; k < 5; k++) {
            console.log(`Third level ${k}`)
            if(k === 2 ) break first
        }        
    }
}