class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render()
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style> * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'roboto', sans-serif;
}
nav{
    border: 1px solid black;
    color: white;
    background-color: #202020;
}
#one{
    display: flex;
    justify-content: space-between;
    padding: 0 7rem;
    align-items: center;
    font-weight: 600;
}
#two{
    display: flex;
    justify-content: center;
    font-size: .8rem;
    font-weight: 600;
}
#two ul{
    display: flex;
    gap: 1rem;
    list-style: none;
}
#three{
    display: flex;
    justify-content: center;
    font-size: .8rem;
    padding: .5rem 0;
    background-color: #151515;
    
}
        </style><nav>
                <div id="one">
                    <div>LOG IN | JOIN</div>
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s" width="80px" alt=""></div>
                    <div>MARVEL UNLIMITED</div>
                </div>
                <div id="two">
                    <ul>
                        <li>NEWS</li>
                        <li>COMICS</li>
                        <li>CHARACTERS</li>
                        <li>MOVIES</li>
                        <li>TV SHOWS</li>
                        <li>GAMES</li>
                        <li>VIDEOS</li>
                        <li>MORE</li>
                    </ul>
                </div>
                <div id="three">
                    <p>STREAM X-MEN '97 EXCLUSIVELY ON DISNEY</p>
                </div>
            </nav>

        
        `;
    }
}

customElements.define('nav-bar', NavBar);

// exporto mi componente
export default NavBar;