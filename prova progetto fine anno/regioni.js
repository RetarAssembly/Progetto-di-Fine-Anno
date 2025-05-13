document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nomeRegione = urlParams.get("nome");

    if (!nomeRegione || !regioni[nomeRegione]) {
        document.body.innerHTML = "<div class='container mt-5 text-center'><h2>Regione non trovata.</h2></div>";
        return;
    }

    // Imposta titoli e intestazioni
    document.title = `${nomeRegione} - Sapori Locali`;
    document.getElementById("titolo").textContent = nomeRegione;
    document.getElementById("sottotitolo").textContent = `Scopri i sapori tipici della ${nomeRegione}`;
    document.getElementById("footer").textContent = `© 2025 Sapori Locali – ${nomeRegione}`;

    // Dati della regione
    const data = regioni[nomeRegione];
    const prodotti = data.prodotti;
    const descrizioniProdotti = data.descrizioneProdotto;
    const immaginiProdotti = data.immaginiProdotto; // Sostituisce spazi con underscore
    const piatti = data.piatti;
    const descrizioniPiatti = data.descrizionePiatti;
    const immaginiPiatti = data.immaginiPiatti; 

    // Popolazione carte dei prodotti
    const titoliCardProdotti = document.querySelectorAll(".titoloCarteProdotti");
    const descrizioniCardProdotti = document.querySelectorAll(".testoCarteProdotti");
    const immaginiCardProdotti = document.querySelectorAll(".immaginiProdotti");

    immaginiCardProdotti.forEach((img, indice) => {
        img.src = immaginiProdotti[indice];
        img.alt = prodotti[indice];
    });

    titoliCardProdotti.forEach((elemento, indice) => {
        elemento.textContent = prodotti[indice];
    });

    descrizioniCardProdotti.forEach((elemento, indice) => {
        elemento.textContent = descrizioniProdotti[indice];
    });

    // Popolazione carte dei piatti
    const titoliCardPiatti = document.querySelectorAll(".titoloCartePiatti");
    const descrizioniCardPiatti = document.querySelectorAll(".testoCartePiatti");
    const immaginiCardPiatti = document.querySelectorAll(".immaginiPiatti");

    immaginiCardPiatti.forEach((img, indice) => {
        img.src = immaginiPiatti[indice];
        img.alt = piatti[indice];
    });

    titoliCardPiatti.forEach((elemento, indice) => {
        elemento.textContent = piatti[indice];
    });

    descrizioniCardPiatti.forEach((elemento, indice) => {
        elemento.textContent = descrizioniPiatti[indice];
    });
});