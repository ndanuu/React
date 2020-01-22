import React, { Component } from 'react';
import PersonnelList from './PersonnelList';
class PersonnelLayout extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <PersonnelList/>
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default PersonnelLayout;