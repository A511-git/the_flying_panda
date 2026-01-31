import {BaseValidator} from "./base-validator.js"
import {AlertSchema} from "./schema/index.js"

class AlertValidator extends BaseValidator {
    constructor() { super(AlertSchema) }
}

export {AlertValidator}