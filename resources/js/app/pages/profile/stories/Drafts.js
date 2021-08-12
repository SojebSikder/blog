import React from 'react'
import { connect } from 'react-redux'

export const Drafts = (props) => {
    return (
        <div>
            <h1>Drafts</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Drafts)
