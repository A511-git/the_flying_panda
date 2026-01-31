import { MapMongoError } from "../../utils/map-mongo-error.js";

class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (err) {
            throw MapMongoError(err);
        }
    }

    async updateById({ id, data }) {
        try {
            return await this.model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        } catch (err) {
            throw MapMongoError(err);
        }
    }

    async deleteById(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        } catch (err) {
            throw MapMongoError(err);
        }
    }

    async getById(id) {
        try {
            return await this.model.findById(id);
        } catch (err) {
            throw MapMongoError(err);
        }
    }

    async findOne(query) {
        try {
            return await this.model.findOne(query);
        } catch (err) {
            throw MapMongoError(err);
        }
    }

    async findAll(query) {
        try {
            return await this.model.find(query);
        } catch (err) {
            throw MapMongoError(err);
        }
    }


    async paginate({ query, options }) {
        try {
            return this.model.paginate(query, options);
        } catch (err) {
            throw MapMongoError(err);
        }
    }


}

export { BaseRepository };
