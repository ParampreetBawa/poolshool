package com.ps

/**
 * Created by parampreet on 1/1/16.
 */
class BaseController {
    def doRespond = {Map o->
        render(contentType: 'application/json') {
            o
        }
    }
}
