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

const cardsData = [
    {
        "name": "Gonti, Canny Acquisitor",
        "description": "Theft",
        "imageLink": "https://cards.scryfall.io/normal/front/0/3/03a7e79f-625a-49ac-9cb1-e1fe5f51f5a0.jpg?1714110365"
    },
    {
        "name": "Katilda, Dawnhart Prime",
        "description": "+1/+1 counters / Humans",
        "imageLink": "https://cards.scryfall.io/normal/front/6/7/673cd775-d417-4652-a91d-825ad5c89e8a.jpg?1636684486"
    },
    {
        "name": "Ulalek, Fused Atrocity",
        "description": "Copy Eldrazi Spells",
        "imageLink": "https://cards.scryfall.io/normal/front/f/d/fdad1b0e-d3cc-4d76-ae7e-fee12558cf2c.jpg?1717644357"
    },
    {
        "name": "Satya, Aetherflux Genius",
        "description": "Enegry",
        "imageLink": "https://cards.scryfall.io/normal/front/3/b/3b964bbe-54cc-425c-9cc6-c877f82af7ba.jpg?1717644351"
    },
    {
        "name": "Zedruu the Greathearted",
        "description": "Stax",
        "imageLink": "https://cards.scryfall.io/normal/front/e/9/e9ea2a6b-5aaf-4178-b945-f409fe83c41a.jpg?1562424565"
    }
]

window.onload = function() {
    for (const card of cardsData) {
        makeCard(card.name, card.description, card.imageLink)
    }
}

{/* <div class="card">
            <h2>Gonti, Canny Acquisitor</h2>
            <img src="https://cards.scryfall.io/normal/front/0/3/03a7e79f-625a-49ac-9cb1-e1fe5f51f5a0.jpg?1714110365">
            <p>Theft</p>
        </div> */}