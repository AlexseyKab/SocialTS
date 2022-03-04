import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType>  {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

   render() {
       return (
           <div>
               {!this.state.editMode && <div><span onDoubleClick={ this.activatedMode } >{this.props.status || 'no status'}</span></div>}
               {this.state.editMode && <div><input  onChange={this.onStatusChange} onBlur={ this.deactivatedMode } value={this.state.status} autoFocus/></div>}
           </div>
       )
   }
}

export default ProfileStatus