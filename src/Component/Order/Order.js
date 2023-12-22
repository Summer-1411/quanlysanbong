import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../GlobalState'
import './Order.css'
function Order(){
    const context = useContext(StateContext)
    return (
        <div className="order-yard ">
            <div className="overlay-order"></div>
            <div className="order-yard-main">
                <div className="order-yard-heading">
                    <div className="heading-title">
                        Đặt sân
                    </div>
                    <Link to='/' className="heading-icon-close">
                        <i className="bi bi-x-circle"></i>
                    </Link>
                </div>
                <div className="order-yard-body">
                    <div className="row-order">
                        <div className="order-yard-title">Tên sân : </div>
                        <div className="row-item-value">{context.yard.name} </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Họ tên khách hàng :
                        </div>
                        
                    <input className='input-info-user name-user' type="text" />
                        
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Số CMND/CCCD :
                        </div>
                        
                    <input className='input-info-user pass-name-user' type="text" />
                        
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Số điện thoại :
                        </div>
                        <input className='input-info-user phone-user' type="text" />
                        
                    </div>
                    <div className="order-date-yard">
                        <div className="order-yard-title">
                            Ngày đặt sân
                        </div>
                        <div className="order-date-yard-input">
                            <input className='select-day-order' type="date" name="" id="" />
                        </div>
                        
                    </div>
                    <div className="order-time-yard">
                        <div className="order-time-yard-left">
                            <div className="order-yard-time-title">
                                Thời gian bắt đầu
                            </div>
                            <div className="order-time-yard-left-value">
                                <input className='input-time-start' type="time" />
                            </div>
                        </div>
                        <div className="order-time-yard-right">
                            <div className="order-yard-time-title">
                                Thời gian kết thúc
                            </div>
                            <div className="order-time-yard-right-value">
                                <input className='input-time-end' type="time" />
                            </div>
                        </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Loại sân :
                        </div>
                        <div className="row-item-value">
                            Sân {context.yard.cotegory}
                        </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Giá sân (1h) :
                        </div>
                        <div className="row-item-value">
                            {context.yard.price} đ
                        </div>
                    </div>
                    <div className="row-order">
                        <div className="order-yard-title">
                            Tổng số tiền cần thanh toán : 
                        </div>
                        <div className="row-item-value">
                            100000đ
                        </div>
                    </div>


                    <div className="bottom-order">
                        <div className="btn-order-yard">
                            Đặt sân
                        </div>
                    </div>

                </div>

                

                
            </div>
            <Outlet />
        </div>
    )
}
export default Order