import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () =>{

    return(
        <div>
        <div className="footer p-1">
        <div className="footer grid">
    
                <div className="footerlist">   
                    <ul>
                        <h2>Dolores </h2>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                    </ul>
                </div>
                <div className="footerlist">   
                    <ul>
                        <h2>Dolores </h2>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                    </ul>
                </div>
                <div className="footerlist">   
                    <ul>
                        <h2>Dolores </h2>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                        <h4>Dolores et</h4>
                    </ul>
                </div>
                <div>
                <div className="footericons flex">
                        <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                        <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} />
                        <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
                </div>
                </div>
            </div>
        </div>
        <div className="legal">
                    Copyright 1999-2021 by Refsnes Data. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer;