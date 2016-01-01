package com.ps

/**
 * Created by parampreet on 12/31/15.
 */
abstract class BaseDomain {
    String id

    Date dateCreated
    Date lastUpdated

    def static getId(String id){
        id.toString()
    }

}
