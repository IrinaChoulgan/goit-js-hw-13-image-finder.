//import * as basicLightbox from 'basiclightbox';


export function onGalleryClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    const imgSrc = e.target.src;
    //console.log (imgSrc)
    const instance = basicLightbox.create(`<img src=${imgSrc} width="800" height="600">`);
    instance.show();
  }