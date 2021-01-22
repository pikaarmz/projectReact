import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }; // state ตัวแปรที่เก็บสามารถเปลี่ยนแปลงค่าได้
        console.log('constructor');
    }

    tick() { // method ที่อัพเดตเวลา
        //this.state = {date : new Date()}; ใช้แบบนี้ไม่ได้
        this.setState({ date: new Date() }); // เปลี่ยนข้อมูลใน state ต้องใช้ setState
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000); // ใช้ method setInterval ในการเรียกใช้ this.trick ทุก ๆ 1000 ms
        
    }

    componentDidUpdate() {
        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const style = { height: 70 };
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='text-left col-md-8'>
                        <h1 className='text-success'><img style={style} src='/images/logo/logo.png' alt='' />เฮลตี้ คาเฟ่ </h1>
                    </div>
                    <div className='text-right col-md-4'>
                        <h5 className='text-muted mt-4'>{this.state.date.toLocaleTimeString()}</h5>
                    </div>

                </div>
                <hr />

            </div>
        );
    }
}
// function Header2() {
// }


export default Header;