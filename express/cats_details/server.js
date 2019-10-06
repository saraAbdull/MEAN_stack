const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cats", (req, res) => {    
    res.render('cats');
})
app.get("/c1", (req, res) => { 
    var d_array=[
        {name: "Mr. Twitches"}, 
        {film: "Tinker Bell and the Great Fairy Rescue"}, 
        {year: "2010"},
        {company: "Disney"},
        {role: "He attacked Tinker Bell the first time he saw her, but then Lizzy put him outside. After being outside, when he came in her appeared to be very angry. He severely impeded the attempt to rescue Tinker Bell from Lizzy until Fawn and Rosetta sedated him with catnip."}
    ]   
    res.render('details',{ details : d_array,pic:"c1"});
})
app.get("/c2", (req, res) => {    
    var d_array=[
        {name: "Garfield"}, 
        {film: "Garfield: The Movie"}, 
        {year: "2004"},
        {company: " Davis Entertainment Company"},
        {role: "Garfield is a fat, lazy, cynical-but-endearing cat. Born in the kitchen of Mamma Leoni’s Italian restaurant, Garfield weighed five pounds, six ounces at birth and right from the start he showed a passion for Italian food. The restaurant owner, forced to choose between Garfield and closing his doors for lack of pasta, sold Garfield to a pet store. Garfield thought he was a goner until Jon Arbuckle walked in the door."}
    ]
    res.render('details',{ details : d_array,pic:"c2"});
})
app.get("/c3", (req, res) => {    
    var d_array=[
        {name: "Puss in Boots"}, 
        {film: "Shrek 2 "}, 
        {year: "2004"},
        {company: " DreamWorks Animation"},
        {role: "Puss in Boots is a main character in the Shrek. He made his first appearance in the film Shrek 2 (2004), soon becoming Shrek's partner and helper (alongside Donkey). In the film Shrek the Third (2007), Puss helps Shrek find the heir to the throne of the Far Far Away Kingdom. "}
    ]      
    res.render('details',{ details : d_array,pic:"c3"});
})


app.listen(8000, () => console.log("listening on port 8000"));
