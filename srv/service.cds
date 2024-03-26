using { attach } from '../db/schema';


service MyService {
    @odata.draft.enabled
    entity order as projection on attach.order;   

}


