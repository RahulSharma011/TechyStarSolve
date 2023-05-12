import React from 'react'
import "../styles/footer.scss"

function Footer() {
  return (
    <footer>
        <div>
            <h1>TechStar</h1>
            <p>@all right reserved</p>
        </div>
        <div>
            <h5>Follow US</h5>
            <div>
                <a href='/' target={"blank"}>github</a>
                <a href='/' target={"blank"}>Instagram</a>
                <a href='/' target={"blank"}>linkdin</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer