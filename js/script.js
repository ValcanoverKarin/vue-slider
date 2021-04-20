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
                'img/montagne.webp',
            ],
        },
        methods: {
            //1g. aggiungo il click della freccia
            nextPhoto() {
                //1h. schiacciando sulla freccia passo all 'immagine successiva
                if ( this.currentActiveImage == this.sliderImages.length - 1 ) {
                    this.currentActiveImage = 0;
                } else {
                    this.currentActiveImage = this.currentActiveImage + 1;
                }
            },

            //1j. aggiungo il click della freccia
            prevPhoto() {
                //1k. schiacciando sulla freccia passo all 'immagine precedente
                if ( this.currentActiveImage == 0 ) {
                    this.currentActiveImage = this.sliderImages.length - 1 ;
                } else {
                    this.currentActiveImage = this.currentActiveImage - 1;
                }
            }
            
        }
    }
);
