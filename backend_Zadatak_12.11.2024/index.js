const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD METODE ZA ČASOPISE

// GET - METODA Dohvati
app.get('/casopisi', (req, res) => {
    return res.send('Popis časopisa');
});

// POST - Dodaj novi časopis
app.post('/addCasopis', (req, res) => {
    const data = req.body;
    const id = Number(data.id);
    const naziv = data.naziv;
    const opis = data.opis;

    // Provjera tipova podataka
    if (typeof id !== 'number' || isNaN(id)) {
        return res.status(400).send('Greška: ID mora biti broj!');
    }

    if (typeof naziv !== 'string' || naziv.trim() === '') {
        return res.status(400).send('Greška: Naziv mora biti validan string.');
    }

    if (typeof opis !== 'string' || opis.trim() === '') {
        return res.status(400).send('Greška: Opis mora biti validan string.');
    }

    return res.send("Dodavanje časopisa: " + id + " " + naziv + " " + opis);
});

// UPDATE - METODA Ažuriranje
app.put('/updateCasopis', (req, res) => {
    const data = req.body;
    const id = Number(data.id);
    const naziv = data.naziv;
    const opis = data.opis;

    if (typeof id !== 'number' || isNaN(id)) {
        return res.status(400).send('Greška: ID mora biti broj!');
    }

    return res.send("Ažuriranje časopisa: " + id + " " + naziv + " " + opis);
});

// DELETE - METODA
app.delete('/deleteCasopis', (req, res) => {
    const data = req.body;
    const id = Number(data.id);

    if (typeof id !== 'number' || isNaN(id)) {
        return res.status(400).send('Greška: ID mora biti broj!');
    }

    return res.send("Brisanje časopisa s ID-jem: " + id);
});

// CRUD METODE ZA PRIMJERAK

// GET - METODA
app.get('/primjerci', (req, res) => {
    return res.send('Popis primjeraka');
});

// POST - Dodaj novi primjerak
app.post('/addPrimjerak', (req, res) => {
    const data = req.body;
    const godina = data.godina;
    const broj = Number(data.broj);
    const sadrzaj = data.sadrzaj;

    // Provjera tipova podataka
    if (typeof godina !== 'string' || godina.trim() === '') {
        return res.status(400).send('Greška: Godina mora biti string.');
    }

    if (typeof broj !== 'number' || isNaN(broj)) {
        return res.status(400).send('Greška: Broj mora biti broj (int).');
    }

    if (typeof sadrzaj !== 'string' || sadrzaj.trim() === '') {
        return res.status(400).send('Greška: Sadržaj mora biti string.');
    }

    return res.send("Dodavanje primjerka: " + godina + " " + broj + " " + sadrzaj);
});

// UPDATE - METODA Ažuriranje
app.put('/updatePrimjerak', (req, res) => {
    const data = req.body;
    const godina = data.godina;
    const broj = Number(data.broj);
    const sadrzaj = data.sadrzaj;

    if (typeof broj !== 'number' || isNaN(broj)) {
        return res.status(400).send('Greška: Broj mora biti broj (int).');
    }

    return res.send("Ažuriranje primjerka: " + godina + " " + broj + " " + sadrzaj);
});

// DELETE - METODA
app.delete('/deletePrimjerak', (req, res) => {
    const data = req.body;
    const broj = Number(data.broj);

    if (typeof broj !== 'number' || isNaN(broj)) {
        return res.status(400).send('Greška: Broj mora biti broj (int).');
    }

    return res.send("Brisanje primjerka s brojem: " + broj);
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});
