import { ValidationError } from "../utils/app-errors.js"
class BaseValidator {
    constructor(schema) { this.schema = schema }
    create(data) {
        return this._parse(this.schema.create, data);
    }

    updateById(data) {
        return this._parse(this.schema.updateById, data);
    }

    deleteById(data) {
        return this._parse(this.schema.deleteById, data);
    }

    getById(data) {
        return this._parse(this.schema.getById, data);
    }

    findOne(data) {
        return this._parse(this.schema.findOne, data);
    }

    findAll(data) {
        return this._parse(this.schema.findAll, data);
    }

    paginate(data) {
        return this._parse(this.schema.paginate, data);
    }    

    _parse(schema, data) {
        const result = schema.strip().safeParse(data);
        if (!result.success) throw new ValidationError("Invalid data", result.error.flatten()?.fieldErrors);
        return result.data;
    }
}

export { BaseValidator }