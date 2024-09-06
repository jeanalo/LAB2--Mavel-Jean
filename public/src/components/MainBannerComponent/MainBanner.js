class MainBanner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render()
    }
    
   render() {
    this.shadowRoot.innerHTML = `
<style>
#HeroMain {
    height: 80vh;
    background-image: url("https://cdn.marvel.com/content/1x/theofficialmarvelpodcast_lob_mas_dsk_01.jpg");
    background-size: cover;
    position: relative;
}

#text {
    position: absolute;
    top: 40%;
    width: 50%;
    color: white;
    margin-left: 2.5rem;
}

#HeroMain button {
    color: white;
    background-color: red;
    border: none;
    padding: 1rem 2rem;
    font-weight: bolder;
    cursor: pointer;
    border-radius: .5rem;
}

article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
}

#HeroFooter {
    position: absolute;
    background-color: white;
    bottom: 0;
    margin-left: 19rem;  
    width: 60vw;
    color: black;
    
}

#HeroFooter ul {
    list-style: none;
    bottom: 0;
    left: 70%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1rem;
    font-weight: bolder;
}

}
</style>
<section id="HeroMain">
        <div id="text">
            <article>
                <h1>THE OFFICIAL MARVEL PODCAST</h1>
                <p>Hear from the cast Thunderbolts*, The Fantastic Four:<br>First Steps, and more!</p>
            </article>
            <button>LISTEN NOW ON YOUTUBE</button>
            <button>SUBSCRIBE</button>
        </div>
        <div id="HeroFooter">
        <ul>
            <li>Marvel At D23 <br> 2024</li>
            <li>The Official Marvel <br> Podcast</li>
            <li>Marvel At San Diego <br> Comic-Con 2024</li>
            <li>This Week's <br> New Comics</li>
            <li>Free Deadpool & <br> Wolverine Comics</li>
        </ul>

        </div>
    </section>
    `;
   }
}

customElements.define('main-banner', MainBanner);

export default MainBanner;