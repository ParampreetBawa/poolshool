package com.ps

/**
 * Created by parampreet on 1/1/16.
 */
class MessageUtil {
    static Map<String,Map<Integer,String>> messageCodeMap = [:]
    static {
        messageCodeMap = [
                'register':[0:'register.alreadyregister',1:'register.emailsent']
        ]
    }

    static String getMsg(String module,Integer code) {
        messageCodeMap[module][code]
    }
}
