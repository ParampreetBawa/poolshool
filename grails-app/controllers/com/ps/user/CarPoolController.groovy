package com.ps.user

import com.ps.BaseController
import com.ps.security.CarPool
import grails.plugin.springsecurity.annotation.Secured

/**
 * Created by parampreet on 1/2/16.
 */
class CarPoolController extends BaseController {

    def registrationService
    @Secured(value=["hasRole('ADMIN')"], httpMethod='POST')
    def postCarPool(String to, String from, Boolean isCarOwner) {
        CarPool carPool = registrationService.postCarPool(to,from,isCarOwner)
        doRespond([id:carPool.id])
    }
}
