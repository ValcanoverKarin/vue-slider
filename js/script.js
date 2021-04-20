//1a. dichiaro la variabile
var app = new Vue (
    {
        el: '#root',
        data: {
            //1c. l'immagine attiva in quel momento
            currentActiveImage: 0,
            //1b. array di immagini
            sliderImages: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ],
        },
    }
);
