function fetchComicAndDisplay() {
    const comicNum = Math.floor(Math.random() * 500) + 1;
    const url = `https://xkcd.com/${comicNum}/info.0.json`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);    
    xhr.onload = function () {
        if (xhr.status === 200) {       
            const comicObj = JSON.parse(xhr.responseText);  
            console.log('Comic Data:', comicObj);
            displayComic(comicObj);        
        } else {
            console.error(`Error: ${xhr.status}`);
        }
    };

  
    xhr.onerror = function () {      
        console.error('Request failed.');
    };
    xhr.send();
}


function displayComic(comicObj) {
    const section = document.createElement('section');
    section.className = 'comic-section';
    const title = document.createElement('h2');
    title.textContent = comicObj.title;
    section.appendChild(title);
    
    const image = document.createElement('img');
    image.src = comicObj.img;
    image.alt = comicObj.alt; 
    image.title = comicObj.alt; 
    section.appendChild(image);
    document.body.appendChild(section);
}

document.getElementById('new-comic-btn').addEventListener('click', fetchComicAndDisplay);

fetchComicAndDisplay();


