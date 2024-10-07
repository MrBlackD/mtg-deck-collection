const makeCard = (cardName, description, imageLink) => {
    const content = document.getElementById("content")

    const cardDiv = document.createElement('div')
    cardDiv.className = "card"

    const h2 = document.createElement('h2')
    h2.textContent = cardName
    cardDiv.appendChild(h2)
    
    const img = document.createElement('img')
    img.src = imageLink
    cardDiv.appendChild(img)

    const p = document.createElement('p')
    p.textContent = description
    cardDiv.appendChild(p)

    content.appendChild(cardDiv)
}

window.onload = function() {
    makeCard("Gonti, Canny Acquisitor", "Theft", "https://cards.scryfall.io/normal/front/0/3/03a7e79f-625a-49ac-9cb1-e1fe5f51f5a0.jpg?1714110365")
    makeCard("Katilda, Dawnhart Prime", "+1/+1 counters / Humans", "https://cards.scryfall.io/normal/front/6/7/673cd775-d417-4652-a91d-825ad5c89e8a.jpg?1636684486")
}

{/* <div class="card">
            <h2>Gonti, Canny Acquisitor</h2>
            <img src="https://cards.scryfall.io/normal/front/0/3/03a7e79f-625a-49ac-9cb1-e1fe5f51f5a0.jpg?1714110365">
            <p>Theft</p>
        </div> */}