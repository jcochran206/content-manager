import axios from 'axios';

export default async function(req,res){
    if(req.method === "GET"){
    const dataRes = await fetch('http://localhost:3030/api/resources');
    const data = await dataRes.json();

        return res.send(data);
    }

    if(req.method === "POST"){
        const {title, description, link, priority, timeToFinish} = req.body;
        if(!title || !description || !link || !priority || !timeToFinish){
            return res.status(422).send("Data is missing!"); 
        }
        try {
            const axiosRes = await axios.post("http://localhost:3030/api/resources", req.body);
            return res.send(axiosRes.data)
        } catch {
            return status(422).send("data can not be stored");
        }
        
        
        return res.send("data has been received!");
    }
  
} 