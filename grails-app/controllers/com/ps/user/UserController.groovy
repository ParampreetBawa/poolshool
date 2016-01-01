package com.ps.user

import com.ps.BaseController
import com.ps.MessageUtil
import grails.plugin.springsecurity.annotation.Secured


/**
 * Created by parampreet on 12/31/15.
 */
class UserController extends BaseController {
    def registrationService
    static allowedMethods = [register: 'POST','report':'GET']

    @Secured('permitAll')
    def register(String email) {
        int code = registrationService.register(email)
        doRespond( [msg :message(code: MessageUtil.getMsg('register',code)),code:code])
    }

    @Secured(value=["hasRole('ROLE_ADMIN')"], httpMethod='GET')
    def report() {
        doRespond([ok:'true'])
    }


}
