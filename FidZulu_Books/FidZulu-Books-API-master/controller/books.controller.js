const fs = require('fs');
const path = require('path');

exports.getAllBooks = async (req, res) => {

    try {
        console.log(req.query);
        let tax = 1.08;
        let conv = 1;
        
        let booksRaw = fs.readFileSync(path.resolve("../FidZulu-Books-API/assets/books.json").replace(/\\/g, '/'));
        let booksJSON = JSON.parse(booksRaw);

        if (req.query.location == 'US-NC'){
          tax = 1.08;
          conv = 1;
        }
        else if(req.query.location == 'IE') {
          tax = 1.23;
          conv = 1.35;
        }

        else if (req.query.location == "IN") {
          tax = 1.18;
          conv = 83;
        }
        for (let index = 0; index < booksJSON.length; index++) {
          const element = booksJSON[index];
          element.price = (element.price * conv * tax).toFixed(2);
          
        }
        res.status(200).json(booksJSON);
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: error.message,
        });
    }
};

exports.getTeam = (req, res) => {
    try {
        let teamRaw = fs.readFileSync(path.resolve("../FidZulu-Books-API/assets/team.json").replace(/\\/g, '/'));
        let teamJson = JSON.parse(teamRaw);
        return res.status(200).json(teamJson)
    }
    catch(error) {
        res.status(500).json({
            error: true,
            message: error.message,
        });
    }
};

exports.insertBook = (req, res) => {
    try {
        let payload = req.body;

        let booksRaw = fs.readFileSync(path.resolve("../FidZulu-Books-API/assets/books.json").replace(/\\/g, '/'));
        let booksJson = JSON.parse(booksRaw);

        booksJson.push(payload);
        console.log(booksJson);
        fs.writeFileSync(path.resolve("../FidZulu-Books-API/assets/books.json").replace(/\\/g, '/'), JSON.stringify(booksJson));

        res.status(201).json({
            error: false,
            message: "record created successully",
            data: payload,
        });
    }
    catch(error) {
        res.status(500).json({
            error: true,
            message: error.message
        });
    }
}