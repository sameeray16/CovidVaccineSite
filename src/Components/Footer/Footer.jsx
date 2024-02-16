import React from "react";

import "./Footer.scss"

import { useAuth } from "../../Context/UserContext";

export const FooterComponent = () => {

    let{currentUser} = useAuth()

    return(
        <>
        {    
        currentUser ?
        <footer className="page-footer font-small blue pt-4">
            
        <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
                <h5 className="text-uppercase">Covid Vaccine Booking</h5>
                <p>When booking a COVID vaccine, use official websites, have ID ready, 
                    and be patient due to high demand. Stay informed about eligibility and new centers, 
                    and encourage others to get vaccinated for community well-being.
                </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mt-md-0 mt-3">
                <h5 className="text-uppercase">Useful Links</h5>
                <ul className="list-unstyled">
                    <li><a href="https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center">Harvard Health Publishing</a></li>
                    <li><a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">World Health Organization</a></li>
                    <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">Centers For Disease Control And Prevention</a></li>
                    <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey={adgroupsurvey}&gclid=EAIaIQobChMI_NzU0byFhAMViy2DAx3-PglSEAAYASAAEgKs0PD_BwE">Vaccine And Vaccine Safety</a></li>
                </ul>
            </div>
        </div>
        </div>

        <div className="footer-copyright text-center py-3">
        <h5 className="text-uppercase">Contact for help</h5>
            Help number : 9874561230
            <br/>
            Email       : info@covidvaccinehelp.com
        </div>

        <div className="footer-copyright text-center py-3">
            © made by : <a href="https://github.com/sameeray16"> sameeray 🌚</a>
        </div>

        </footer>
        :
        ""
        }
        </>
    )
}
