
const client = require('../db_config/mongoose')
exports.createContact = async (req, res, next) => {
    const {name,number,type} = req.body;
    console.log('client is  : ',client )
    const clientDb = client.getDb();

    try{
        if(!name && !number && !type){    
            return res.status(500).send({isError:true,message:'Please provide all the parameters'})
        }else 
        if(type !== 'business' && type !== 'personal'){
            return res.status(500).send({isError:true,message:'Invalid Contact Type'})        
        }
        console.log(clientDb)
        const ifNameExists = await clientDb.collection("contacts").findOne({name:name});
        if(ifNameExists)
            return res.status(500).send({isError:true,message:'Name already exists'})
        const insertResult = await clientDb.collection("contacts").insertOne({
            name: name,
            number: number,
            type: type,
        });
        console.log(insertResult);
        return res.status(200).send({isError:false,data:insertResult});
    }catch(e){
        console.log(e)
    }

}

exports.getAllContacts = async (req, res, next) => {
    const clientDb = client.getDb();
    try{
        const type = req.query.type;
        let insertResult=null;
        if(type)
            insertResult = await clientDb.collection("contacts").find({type:type});
        else
            insertResult = await clientDb.collection("contacts").find();
        const resArr = await insertResult.toArray();
        console.log(resArr);
        return res.status(200).send(resArr);
    }catch(e){
        console.log(e)
        return res.status(500).send(e);
    }

}

exports.deleteContact = async (req, res, next) => {
    const id = req.query.param;
    const clientDb = client.getDb();
    try{
        const deleteId = await clientDb.collection("contacts").deleteOne({id:id});
        console.log(deleteId);
        return res.send(deleteId);
    }catch(e){    
        console.log(e)
        return res.send({isError:true,message:e})
    }

}

exports.updateContact = async (req, res, next) => {
    const id = req.query.param;
    const clientDb = client.getDb();
    try{
        const update = await clientDb.collection("contacts").updateOne({ id: id }, { $set: req.body });
        console.log(update);
        return res.send(update);
    }catch(e){    
        console.log(e)
        return res.send({isError:true,message:e})
    }

}