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

    def leftNavFeed() {
        def amp = [feeds:
                           [
                                   [id: '1', heading: 'Life term for British couple plotting terror attack'],
                                   [id: '1', heading: 'Life term for British couple plotting terror attack'],
                                   [id: 2, heading: 'Home ministry alerts defence ministry about Pakistan\'s spy ring'],
                                   [id: 4, heading: 'Rat on a plane! Air India flight to London returns after rodent sighting'],
                                   [id: 5, heading: '10 horrible but catchy songs that people couldn\'t ignore in 2015']
                           ]]
        doRespond(amp)
    }

    def mainContent() {
       def amp = [feeds: [[id:'1',
        heading: 'Odd-even: HC questions AAP govt on exemption to 2 wheelers, women',
        content :'The Delhi high court on Wednesday sought response from AAP government about why two-wheelers and women drivers have been exempted from the odd-even scheme in the national capital. The court asked to file a response on the same by January 6.',
        userName:'Parampreet Singh',
        userBio:'Java Developer',
        userCompany :'',
        views:342000,
        likes:23,
        dislikes :1,
        hasMore:true],
         [id:'2',
          heading: 'Days after row over students, govt says more Indians deported from US',
          content :'The Delhi high court on Wednesday sought response from AAP government about why two-wheelers and women drivers have been exempted from the odd-even scheme in the national capital. The court asked to file a response on the same by January 6.',
          userName:'Parampreet Singh',
          userBio:'Java Developer',
          userCompany :'',
          views:34000,
          likes:2,
          dislikes :1,
          hasMore:true],
         [id:'3',
          heading: 'Days after row over students, govt says more Indians deported from US',
          content :'The Delhi high court on Wednesday sought response from AAP government about why two-wheelers and women drivers have been exempted from the odd-even scheme in the national capital. The court asked to file a response on the same by January 6.',
          userName:'Anonymous',
          userBio:'',
          userCompany :'',
          views:3400,
          likes:20,
          dislikes :10,
          hasMore:true]
        ]]
        doRespond amp

    }
}
