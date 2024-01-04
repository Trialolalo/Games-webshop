class UserArea extends HTMLElement {

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
            .header-menu{
                margin: 0.3rem 0;
            }

            .user-area{
                display: flex;
                align-items: center;
            }

            .user-area span{
                display: block;
                height: 3rem;
                background: hsl(0, 0%, 0%);
                box-sizing: border-box;
                width: 4px;
                border-radius: 5px;
                margin: 10px;
            }

            .account-icon svg{
                width: 2.5rem;
                cursor: pointer;
            }

            .cart-icon svg{
                width: 2.5rem;
                cursor: pointer;
            }
        </style>
        
        <section class="header-menu">
            <div class="user-area">
                <div class="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z" />
                    </svg>
                </div>
                <span></span>
                <div class="account-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                </div>
            </div>
        </section>     
      `


    }

}
  
customElements.define('user-area-component', UserArea);