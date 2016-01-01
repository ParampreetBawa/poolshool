package com.ps.dashboard

import com.ps.BaseController
import grails.plugin.springsecurity.annotation.Secured

/**
 * Created by parampreet on 1/1/16.
 */
@Secured('permitAll')
class AsyncController extends BaseController {
    def springSecurityService
    def topNav() {
        doRespond([isLoggedIn:springSecurityService.isLoggedIn(),notifications:0,deals:11])
    }
}
