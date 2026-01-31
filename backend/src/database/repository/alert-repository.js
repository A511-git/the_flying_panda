import {BaseRepository} from "./base-repository.js";
import {AlertModel} from "../models/index.js"

class AlertRepository extends BaseRepository {
    constructor() {
        super(AlertModel);
    }
}

export {AlertRepository};