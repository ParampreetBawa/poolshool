package com.ps.security

/**
 * Created by parampreet on 1/2/16.
 */
class CarPool {
    String id

    Date dateCreated
    Date lastUpdated

    User user
    String fromAddress
    String toAddress
    Boolean isCarOwner

    static mapping = {
        id generator: 'uuid'
    }
}
