package com.ps.user

import com.ps.BaseController
import com.ps.MessageUtil
import com.ps.security.Registration
import com.ps.security.User
import grails.plugin.springsecurity.annotation.Secured


/**
 * Created by parampreet on 12/31/15.
 */
class UserController extends BaseController {
    def registrationService
    def springSecurityService
    static allowedMethods = [register: 'POST','report':'GET']

    @Secured('permitAll')
    def register(String email) {
        int code = registrationService.register(email)
        doRespond( [msg :message(code: MessageUtil.getMsg('register',code)),code:code])
    }

    @Secured('permitAll')
    def invite(String invitationId) {
        Map ret
        if(springSecurityService.isLoggedIn()) {
            ret = [error:true,msg:'User has already logged in. Please logout first']
        }else {
            Registration registration = Registration.get(invitationId)
            if (!registration) {
                ret = [error: true, msg: 'Invitation Id not valid']
            } else {
                ret = [invitationId:invitationId]
            }
        }
        doRespond ret
    }

    @Secured('permitAll')
    def create(String firstName,String lastName,String invitationId) {
        User user = registrationService.create(invitationId,firstName,lastName)
        doRespond([id:user.id,email:user.email])
    }

    @Secured(value=["hasRole('ROLE_ADMIN')"], httpMethod='GET')
    def report() {
        doRespond([ok:'true'])
    }


}
