const express = require ("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    // if(!parsedPayload.success){
    //         res.status(411).json({
    //             msg: "You sent the wrong inputs!",
    //         })
    // }
    //put data to database
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        msg: "Todo created"
    })

})

app.get("/todo", async function(req, res){
    const todos = await todo.find({});

    res.status(200).json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs!",
        })


    if(parsedPayload.success){
        await todo.update ({
            _id: req.body.id 
        }, {
            completed: true
        })
    
        res.status(200).json({
            msg: "Todo marked as completed"
        })
    }
}
})

// app.delete("/todo", function(req, res){

// })

app.listen(3000);

