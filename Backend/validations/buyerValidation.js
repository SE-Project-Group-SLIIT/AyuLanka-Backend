const Joi = require('joi');

// validation schema to validate buyer data fields
const buyerValidationSchema = (data) => {
    const schemaValidation = Joi.object({
        BuyerName: Joi.string().required(),
        DOB: Joi.string().required(),
        Gender: Joi.string().required(),
        Email: Joi.string().required(),
        MobileNumber: Joi.string().required(),
        Password: Joi.string().required(),
        Province: Joi.string().required(),
        City: Joi.string().required(),
        Area: Joi.string().required(),
        Address: Joi.string().required(),
        PostalCode: Joi.string().required(),
    });

    return schemaValidation.validate(data);

};

module.exports.buyerValidationSchema = buyerValidationSchema;