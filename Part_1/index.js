 
function Header() {
    return(
        <header>
            <nav className="navbar">
                <img src="react-logo.png" className="image"/>
                <h3>ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}
function MainContent(){
    return(
        <div className="main">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise app, including mobile apps</li>
            </ul>
        </div>
    )
}

function Page(){
    return(
        <div>
            <Header />
            <MainContent />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
 