import React, {Component} from 'react';
import carInfo from './carInfo';

class carListing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        <carInfo />
                    </div>
                    <div className="col-sm-6"><img src="" width="100px"/></div>
                </div>
            </div>
        )
    }
}

export default carListing;