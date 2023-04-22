const Joi = require('joi');

// validation schema to validate buyer data fields
const buyerValidationSchema = (data) => {
    const schemaValidation = Joi.object({
        BuyerName: Joi.string().required(),
        // Address:Joi.string().required(),
        DOB:Joi.date().required(),
        Email:Joi.string().required(),
        MobileNumber:Joi.number().required(),
        Gender:Joi.string().required(),
        Password:Joi.string().required(),
    });

    return schemaValidation.validate(data);

};

module.exports.buyerValidationSchema = buyerValidationSchema;