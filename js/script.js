// Descrizione: Rifare l’esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
// Se clicco sul singolo dot, cambia immagine

Vue.config.devtools = true;

new Vue(
    {
        el:"#app",
        data: {
            photos: [
                "https://images2.alphacoders.com/100/1003880.png",
                "https://i.pinimg.com/originals/39/fe/a7/39fea76d74a1b9c48d0c455f7d9ec27b.png",
                "https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg",
                "https://i.redd.it/91g28yeoz1a61.jpg"
            ],
            pictureIndex: 0,
            intervalSlot: null,
        }
        created() {
            this.intervalSlot = setInterval(() => {
                this.next();
            }, 3000)
        }
        methods: {
            next: function () {
                if (this.pictureIndex === (this.photos.length - 1)) {
                    this.pictureIndex = 0;
                } else {
                    this.pictureIndex++;
                }
            }
            prev: function () {
                if (this.pictureIndex === 0) {
                    this.pictureIndex = this.photos.length -1;
                } else {
                    this.pictureIndex--;
                }
            }
            moveTo: function(index) {
                this.pictureIndex = index;
            }
            isCurrentDot: function(index) {
                if (index === this.pictureIndex) {
                    return 'current';
                } else {
                    return '';
                }
            }
        }
    }
);