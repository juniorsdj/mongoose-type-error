import { ModelExample } from "./model";


const agg = [{
    $sort: {
        count: 1
    }
}]

ModelExample.aggregate(agg)



ModelExample.aggregate([{
    $sort: {
        count: 1
    }
}])