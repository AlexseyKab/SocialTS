import React from "react";

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType>  {
    state = {
        editMode: false
    }

    activatedMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedMode = () => {
        this.setState({
            editMode: false
        })
    }

   render() {
       return (
           <div>
               {!this.state.editMode && <div><span onDoubleClick={ this.activatedMode } >{this.props.status}</span></div>}
               {this.state.editMode && <div><input onBlur={ this.deactivatedMode } value={this.props.status} autoFocus/></div>}
           </div>
       )
   }
}

export default ProfileStatus