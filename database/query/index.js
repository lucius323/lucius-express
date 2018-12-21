/**
 * Created by Sung Shin on 2017-08-11.
 */

const list = ( options, paging , transaction )=>{

    let order = null

    paging.limit =  paging.limit  || Number.MAX_SAFE_INTEGER - 1
    paging.offset = paging.offset ||  0

    if( options.order ) {
        if(options.order.startsWith('-')){
            order = [[options.order.substring(1),'DESC']]
        }
        else if(options.order.startsWith('+')){
            order = [[options.order.substring(1),'ASC']]
        }
        else {
            order = [[options.order,'ASC']]
        }
        delete options.order
    }

    let query = {
        where:options,
        limit: paging.limit+1,
        offset: paging.offset,
        order,
        transaction,
    }
    return query
}

const get = ( options, transaction )=>{

    let query = {
        where:options,
        transaction,
    }
    return query
}

const update = ( values ,options, transaction )=>{

    let query = {
        where:options,
        transaction,
    }
    return query
}

const betweenDate = ( options, from, to, target )=> {

    if( options[from] && options[to] ) {
        options[target] = {
            $lt: new Date(options[to]).addDays(1).format('YYYY-MM-DD'),
            $gte: new Date(options[from]).addDays(0).format('YYYY-MM-DD')
        }

        delete options[from]
        delete options[to]
    }
    else if( options[from]) {
        options[target]= {
            $gte: new Date(options[from]).addDays(0).format('YYYY-MM-DD')
        }
        delete options[from]
    }

    else if( options[to]) {
        options[target]= {
            $lt: new Date(options[to]).addDays(1).format('YYYY-MM-DD'),
        }
        delete options[to]
    }
}

const between = ( options, from, to, target )=> {
    if( options[from] && options[to] ) {
        options[target] = {
            $lte: options[to],
            $gte: options[from]
        }

        delete options[from]
        delete options[to]
    }
    else if( options[from]) {
        options[target]= {
            $gte: options[from]
        }
        delete options[from]
    }

    else if( options[to]) {
        options[target]= {
            $lte: options[to]
        }
        delete options[to]
    }

}

const parseUid = ( decoded )=>{
    if(!decoded){
        return null
    }

    let uid = (decoded.platform_admin_id || decoded.app_admin_id || decoded.promoter_id || decoded.user_id || null)

    return uid
}


module.exports =
    {
        list,
        get,
        betweenDate,
        between,
        parseUid
    };