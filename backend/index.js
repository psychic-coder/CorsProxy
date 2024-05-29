import express from "express"
import cors from "cors"


var app=express();


app.use(cors());



app.get("/",(req,res)=>{
    res.send("Server is running ")
})

app.get("/api/jokes",(req,res)=>{



    const jokes = [
        {
            id: 1,
            title: "The Past, Present, and Future Walk Into a Bar",
            content: "It was tense."
        },
        {
            id: 2,
            title: "Why Don't Scientists Trust Atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 3,
            title: "Parallel Lines Have So Much in Common",
            content: "It's a shame they'll never meet."
        },
        {
            id: 4,
            title: "What Do You Call Fake Spaghetti?",
            content: "An impasta!"
        },
        {
            id: 5,
            title: "I Told My Wife She Was Drawing Her Eyebrows Too High",
            content: "She looked surprised."
        },
        {
            id: 6,
            title: "Why Did the Scarecrow Win an Award?",
            content: "Because he was outstanding in his field."
        },
        {
            id: 7,
            title: "What Did One Ocean Say to the Other Ocean?",
            content: "Nothing, they just waved."
        },
        {
            id: 8,
            title: "Why Did the Tomato Turn Red?",
            content: "Because it saw the salad dressing!"
        },
        {
            id: 9,
            title: "Why Did the Bicycle Fall Over?",
            content: "Because it was two-tired."
        },
        {
            id: 10,
            title: "What Do You Call a Fish with No Eyes?",
            content: "Fsh."
        }
    ];
    
  res.send(jokes);
})

const port=5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});