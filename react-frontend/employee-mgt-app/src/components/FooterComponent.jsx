import React, { Component } from 'react'

export default class FooterComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'>All Rights Reserverd 2021 @Anji</span>
                </footer>
            </div>
        )
    }
}
