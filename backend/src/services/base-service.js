class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        return this.repository.create(data);
    }

    async updateById({id, data}) {
        return this.repository.updateById({ id, data });
    }

    async deleteById(id) {
        return this.repository.deleteById(id);
    }

    async getById(id) {
        return this.repository.getById(id);
    }

    async findOne(query) {
        return this.repository.findOne(query);
    }

    async findAll(query) {
        return this.repository.find(query);
    }

    async paginate({query, options}) {
        const {docs, ...paginate} = await this.repository.paginate({ query, options });
        
        return {docs, paginate}
    }

}

export { BaseService };