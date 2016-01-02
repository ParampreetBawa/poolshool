package com.ps.security

import com.ps.BaseDomain
import com.ps.EventDTO

/**
 * Created by parampreet on 12/31/15.
 */
class Registration {
    String id

    Date dateCreated
    Date lastUpdated

    String email
    String invitationCode

    static constraints = {

    }
    static mapping = {
        id generator: 'uuid'
    }

    EventDTO toEventDTO() {

    }
}
