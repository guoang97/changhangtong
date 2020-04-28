const jwt = require('express-jwt')
const { PEIVATE_KEY } = require('./config')
module.exports = jwt({
    secret:PEIVATE_KEY,
    credentialsRequired:true
}).unless({
    path:[
        '/',
        '/webadmin/registered',
        '/admin/login',
        '/webadmin/login',
        '/uplod',
        '/webadmin/createkefu',
        '/web/webgetwebhelplist',
        '/web/gethelpcontent',
        '/web/getcomment',
        '/web/getreply',
        '/admin/contentexamine',
        '/web/getarticlelist',
        '/web/webgetwebactivitylist',
        '/web/webgetjoblist',
        '/web/webgetcompanylist',
        '/web/getoldstuffcontent',
        '/web/getactivitycontent',
        '/web/webgetweboldstufflist',
        '/web/getactivitycontent',
        '/web/search',
        '/admin/carousellist',
        '/admin/lablelist',
        '/web/getreply',
        '/web/getjobcontent',
        '/web/getarticlecontent',
        '/web/getcompanycontent',
        '/web/search',
    ]
})