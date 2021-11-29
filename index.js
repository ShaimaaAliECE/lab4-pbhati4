const express = require('express');
let questionList = require('./questions.json');
const app = express();
 
//serve static contents
app.use(express.static('static'));

//dynamic handling
app.get('/questions', (req,res) => {
      res.json(questionList); //send response of questions
})

//answer checking on server side
app.get('/answers', (req, res) => {
    let questionIndex = req.query.q;
    let answerIndex = req.query.a;
    let feedback = "";   
    let question = questionList[questionIndex];
    
    if(question.answerIndex == answerIndex){ 
        feedback = "Correct! " + questionIndex;
    }
    else{
        feedback = "Wrong! " + questionIndex;
    }
    
    res.send(feedback); //send response of answer
})

app.listen(80);