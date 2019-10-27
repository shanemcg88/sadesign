import React from 'react'
import '../styles/responsiveContact.css'
import { BrowserRouter as Router, Route, Link, Switch, NavLink, withRouter, connect } from 'react-router-dom'
class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (         
            <div className='contact'>
                <div className='border'></div>
                <div id='contactInfo'>
                    <h5 id='contactMe'>
                        Contact Me
                    </h5>
                    <p id='contactAddress'>
                        U-101 #342 15Ave, SW<br/>
                        Calgary, AB<br/>
                        Canada, T2R 0P9
                    </p>
                    <p id='contactPhone'>
                        SARAH ALONSO<br/>
                        <span id='phone'>+1403.827.7279</span>
                    </p>
                    <p id='collaborate'>
                        Collaborate
                    </p>
                    <p id='socialMedia'>
                        <a 
                            href="https://www.facebook.com/sarahalonsographicart/"
                            target="_blank">
                                Facebook
                        </a><br/>
                        <a 
                            href="https://www.instagram.com/sarahalonso.design/"
                            target="_blank">
                                Instagram
                        </a><br/>
                        <a
                            href="https://www.linkedin.com/in/sarah-alonso-d3s1gn/"
                            target="_blank">
                                LinkedIn
                        </a><br/>
                    </p>
                    <p id='privacyPolicy'>
                        Privacy Policy 
                    </p>
                    <p id='copyright'>
                        &copy;2019SARAHALONSO&#8212;DESIGN
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact