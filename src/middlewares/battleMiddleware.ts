import battleSchema from "../schemas/battleSchema"


export async function battleValidation(req, res, next) {
    
    const validation = battleSchema.validate(req.body)

    if (validation.error) {
        res.status(422).send({error: validation.error.details})
        return
    }

    


    next();
}