import React from 'react';

const Footer = (props) => {
    const { id } = props;

    return (
        <div className='container-fluid'>
            <hr />
            <div className='text-center title text-uppercase'>
                <small>
                    <span className='text-muted'> Powered By {id}</span>
                </small>
            </div>




        </div>

    )
}

// function Footer2() {
// }


export default Footer;