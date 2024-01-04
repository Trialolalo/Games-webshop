class ProductDetail extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {

        this.render()
    }
  
    render () {
        this.shadow.innerHTML =
        /*html*/`
        <style>

        .titles{
            display: flex;
            align-items: center;
            gap: 0.8rem;
            max-height: 2rem;
            margin-top: 4rem;
        }

        .titles svg{
            width: 2.8rem;
        }

        .titles h2{
            font-size: 2rem;
            font-family: 'Exo 2', sans-serif;
            font-weight: 700;
        }

        .divider{
            display: block;
            height: 12px;
            background: hsl(0, 0%, 0%);
            box-sizing: border-box;
            height: 5px;
            width: 100%;
            border-radius: 5px;
            margin: .5rem 0rem;
            margin-bottom: 1rem;
        }
        
        .product-data{
            display: flex;
            background-color: hsla(0, 0%, 0%, 0.651);
            border-radius: 10px;
            margin-bottom: 2rem;
            text-wrap: wrap;
            word-wrap: break-word;
            font-family: 'Exo 2', sans-serif;  
            font-weight: 100;
        }

        .product-detail img{
            width: 20rem;
            object-fit: cover;
            box-sizing: border-box;
            padding: 1rem;
        }

        .product-detail:hover{
            background-color: hsla(0, 0%, 0%, 0.842);
            border-radius: 10px;
        }

        .product-detail:hover img{
            opacity: 0.08;
        }

        .product-detail svg{
            width: 6rem;
            fill: hsl(0, 0%, 100%);
            position: absolute;
            opacity: 0;
            left: 27vh;
            top: 60vh;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .product-detail:hover svg{
            opacity: 1; 
            visibility: visible;
        }

        .description-box{
            padding: 1rem;
            color: hsl(0, 0%, 100%);
        }

        .description-box p{
            margin-bottom: 1.5rem;
            margin: 0;
        }

        .genres{
            display:flex;
            gap: 0.6rem;
            flex-wrap: wrap;

        }

        .genre{
            background-color: hsla(0, 0%, 0%, 0.651);
            border-radius: 10px;
            font-family: 'Exo 2', sans-serif;  
            font-weight: 100;
            font-size: 0.8rem;
        }

        .genre p{
            padding: 0.5rem;
            margin: 0;
        }

        .gallery {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .thumbnails {
            display: flex;
        }

        .thumbnails img {
            width: 100px;
            height: auto;
            margin-right: 10px;
            cursor: pointer;
        }

        .preview {
            margin-top: 20px;
        }

        #preview-image {
            max-width: 400px;
            max-height: 400px;
        }

        .product-data:last-child{
            justify-content: flex-end;
        }

        .price{
            display: flex;
            background-color: hsla(0, 0%, 0%, 0.808);
            border-radius: 10px;
            font-family: 'Exo 2', sans-serif;  
            font-weight: 100;
            color: hsl(0, 0%, 100%);
            justify-content: flex-end;
            height: 2rem;
            max-width: 10rem;
            align-items: center;
            padding: 2rem;
        }



        </style>
        
        <main>
            <div class="titles">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z" />
                </svg>
                <h2>Stray</h2>
            </div>
            <span class="divider"></span>
            
            <div class="product-data">
                <div class="product-detail">
                    <img alt="Stray" src="img/stray.webp">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" />
                    </svg>
                </div>
                <div class="description-box">
                    <h3>
                        Description
                    </h3>
                    <p>
                        Stray is a third-person action-adventure video game starring a cat set in the neon-lit alleys of a decadent cybercity and its murky corners. In Stray, our feline companion, lost, alone, and separated from its family, must roam the city inhabited by innocent androids and dangerous creatures, fend off unforeseen threats, and solve an ancient mystery to escape from a forgotten city.
                    </p>
                    <h3>
                        Players
                    </h3>
                    <p>
                        1 (Competitive: No / Cooperative: No)
                    </p>
                    <h3>
                        Genre
                    </h3>
                    <div class="genres">
                        <div class="genre">
                            <p>Action</p>
                        </div>
                        <div class="genre">
                            <p>Adventure</p>
                        </div>
                        <div class="genre">
                            <p>Cats</p>
                        </div>
                    </div>
                    <div class="gallery">
                        <div class="thumbnails">
                            <img alt="Stray Thumbnail" src="img/stray_thumbnail.webp" data-index="0">
                            <img src="imagen2.jpg" alt="Imagen 2" data-index="1">
                            <!-- Agrega más imágenes aquí -->
                        </div>
                        <div class="preview">
                            <img class="preview-image"  alt="Stray Preview Image" src="img/stray_preview.webp">
                        </div>
                    </div>                    
                </div>
            </div>   
            <div class="price">
                <h2>
                    18.47€
                </h2>
            </div>        
        </main>
      `;
      this.setupGallery();
    }
  
    setupGallery() {
      const thumbnails = this.shadow.querySelectorAll('.thumbnails img');
      const previewImage = this.shadow.querySelector('#preview-image');
  
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          const index = thumbnail.getAttribute('data-index');
          const imageUrl = thumbnail.getAttribute('src');
          previewImage.setAttribute('src', imageUrl);
          previewImage.setAttribute('data-current-index', index);
        });
      });
    }
}
  
customElements.define('product-detail-component', ProductDetail);