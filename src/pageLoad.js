export default function pageLoad(content, imgPath) {
        
    heading(content)
    showcaseImg(imgPath, content)
}

export function heading(content) { 

    let header = document.createElement('div')
    header.id = 'header'
    content.appendChild(header)
    let webheading = document.createElement('H1');
    webheading.id = 'title'
    webheading.textContent = `Irtiza's Dessert Haven`
    header.appendChild(webheading)
    // content.appendChild()

}


export function showcaseImg(url, content) { 

    // let upperBody = document.createElement('div')
    // upperBody.style.cssText = 'margin: 0 auto; width: 100%;'
    // content.appendChild(upperBody)
    let showImg = document.createElement('img')
    showImg.id = 'showcaseImg'
    showImg.src = url
    showImg.style.height = '500px'
    content.appendChild(showImg)

}