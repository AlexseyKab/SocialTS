import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/Redux-Store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect  <T>(Component: ComponentType<T>)  {
    debugger
    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>

        return <Component {...restProps as T}/>

    }
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectRedirectComponent
}