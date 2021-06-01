import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Functions = () => {
    return(
        <div className="functions">
            <div className="function-grid">
                <div className="firstRow">
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="check"/>
                        <h3>Reliable</h3>
                    </div>
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="code"/>
                        <h3>Open-source</h3>
                    </div>
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="mobile"/>
                        <h3>Accessible on all platform</h3>
                    </div>
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="database"/>
                        <h3>Persistent</h3>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="bell"/>
                        <h3>Notifications on complete</h3>
                    </div>
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="share"/>
                        <h3>Share your orders</h3>
                    </div>
                    <div className="aFunction">
                        <FontAwesomeIcon size="3x"icon="cookie"/>
                        <h3>No datamining</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Functions;