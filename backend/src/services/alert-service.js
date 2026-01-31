import { BaseService } from "./base-service.js"
import { AlertRepository } from "../database/repository/index.js";

class AlertService extends BaseService {
    constructor() {
        super(new AlertRepository());
    }

    async paginate(data) {
        const query = {};
        const options = { page: data.page || 1, limit: data.limit || 30 };

        if(data.visaType) query.visaType = data.visaType;
        if(data.status) query.status = data.status;

        return super.paginate({ query, options });
    }
}

export { AlertService };