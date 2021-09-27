import React,{Fragment} from 'react'

 const Cardwidget=({contador})=> {
    return (
        <Fragment>
            <i class="far fa-shopping-cart"></i> <span>{contador}</span>
        </Fragment>
    )
}
export default Cardwidget;