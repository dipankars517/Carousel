const images = [
    'https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1282&q=80',
    'https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1620052581237-5d36667be337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    'https://images.unsplash.com/photo-1621468635836-494461c17b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1628522300947-065b5ddcd3de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1609088810733-c3b2eb8df983?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1609520934871-d2b769ae407c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');
const carouselNav = document.getElementById('carousel-nav');

const constainerWidth = 80;
const flexContainerWidth = n*constainerWidth;
flexContainer.style.width = flexContainerWidth;

for(let i=0; i<n; i++) {
        const newImg = document.createElement('img');
        newImg.src = images[i];
        newImg.classList.add('img-style')
        flexContainer.appendChild(newImg);

        const dotDiv = document.createElement('div');
        dotDiv.classList.add('carousel-dot');
        carouselNav.appendChild(dotDiv);
        dotDiv.addEventListener('click', (event) => {
           const index = [...carouselNav.children].indexOf(event.target);
           curPosition = index;
           showImg(index)
        });
}

let curPosition = 0;
showImg(0);
leftButton.addEventListener('click', () => {
    if(curPosition > 0) {
        showImg(curPosition - 1)
    } else {
        showImg(n - 1)
    }
})

rightButton.addEventListener('click', () => {
    if(curPosition < n-1) {
        showImg(curPosition + 1)
    } else {
        showImg(0)
    }
})

function showImg(position) {

    const prevDot = carouselNav.children[curPosition];
    prevDot.classList.remove('active');
    curPosition = position;

    const curDot = carouselNav.children[curPosition];
    curDot.classList.add('active');


    const translateXDistance = -curPosition * constainerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`
}
