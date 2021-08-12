import React from 'react'
import { connect } from 'react-redux'

export const Published = (props) => {
    return (
        <div>
            <h1>Published</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Published)
