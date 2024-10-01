class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.currentIndex = 0;
        this.slides = [];
        this.intervalId = null;
        this.isPlaying = true;
    }

    connectedCallback() {
        this.render();
        this.startAutoSlide();
    }

    disconnectedCallback() {
        this.stopAutoSlide();
    }

    startAutoSlide() {
        if (this.isPlaying) {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 2000); // = 2 seconds
        }
    }

    stopAutoSlide() {
        clearInterval(this.intervalId);
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.stopAutoSlide();
            this.updatePlayPauseIcon('play');
        } else {
            this.startAutoSlide();
            this.updatePlayPauseIcon('pause');
        }
        this.isPlaying = !this.isPlaying;
    }

    updatePlayPauseIcon(state) {
        const button = this.shadowRoot.querySelector('#playPauseBtn');
        button.innerHTML = state === 'play' ? `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
            </svg>
        ` : `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/>
            </svg>
        `;
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlideVisibility();
    }

    updateSlideVisibility() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === this.currentIndex) {
                slide.classList.add('active');
            }
        });
    }

    handleSlideClick(event) {
        const url = event.currentTarget.dataset.url;
        if (url) {
            window.open(url, '_blank');
        }
    }

    render() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'css/carousel.css');

        this.shadowRoot.innerHTML = `
            <div class="carousel">
                <slot></slot>
                <div class="carousel-controls">
                    <button id="playPauseBtn"></button>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(linkElem);

        this.slides = this.shadowRoot.querySelector('slot').assignedElements();
        this.updateSlideVisibility();
        this.updatePlayPauseIcon('pause'); 

        this.shadowRoot.querySelector('#playPauseBtn').addEventListener('click', () => {
            this.togglePlayPause();
        });

        this.slides.forEach(slide => {
            slide.addEventListener('click', this.handleSlideClick);
        });
    }
}

customElements.define('image-carousel', ImageCarousel);
