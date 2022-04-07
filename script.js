let teamContainer = document.querySelector('.team-container')

const team = [
    {
        immagine: "img/angela-caroll-chief-editor.jpg",
        nome: "Angela Caroll",
        ruolo: "Editor"
    },
    {
        immagine: "img/angela-lopez-social-media-manager.jpg",
        nome: "Angela Lopez",
        ruolo: "Media Manager"
    },
    {
        immagine: "img/barbara-ramos-graphic-designer.jpg",
        nome: "barbara-ramos",
        ruolo: "graphic-designer"
    },
    {
        immagine: "img/scott-estrada-developer.jpg",
        nome: "scott-estrada",
        ruolo: "developer"
    },
    {
        immagine: "img/walter-gordon-office-manager.jpg",
        nome: "gordon-office",
        ruolo: "manager"
    },
    {
        immagine: "img/wayne-barnett-founder-ceo.jpg",
        nome: "wayne-barnett",
        ruolo: "ounder-ceo"
    }
]


let div = "";

for(let i = 0; i < team.length; i++){
    
    div += `
    <div class="team-card">
            <div class="card-image">
                <img
                    src= ${team[i].immagine}
                    alt="Wayne Barnett"
                />
            </div>
            <div class="card-text">
                <h3>${team[i].nome}</h3>
                <p>${team[i].ruolo}</p>
            </div>
        </div>
    `
}
teamContainer.innerHTML += div
