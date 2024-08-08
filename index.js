import express from "express";
import axios from "axios";

const PORT = 3000;
const API_URL = "https://newton.now.sh/api/v2";

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', {});
});

app.get('/calculate', async (req, res) => {
    const expression = req.query.expression;
    
    // Split the string by the first '/'
    const [firstPart, ...rest] = expression.split('/', 2);
    
    // Combine the rest parts if needed
    const remainingParts = rest.join('/');
    
    const API_ENDPOINT = `${API_URL}/${firstPart}/${encodeURIComponent(remainingParts)}`;
    console.log(API_ENDPOINT);
    
    try {
        const response = await axios.get(API_ENDPOINT);
        res.render('index.ejs', {
            expression: expression,
            result: response.data.result,
        })
    } catch (err) {
        res.render('index.ejs', {
            expression: expression,
            error: err,
        })
    }
    
});

app.listen(PORT, () => {
    console.log(`Started server on port ${PORT}`);   
})