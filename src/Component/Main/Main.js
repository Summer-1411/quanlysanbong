import './Main.css'
import ListYard from '../../App/ListYard/ListYard'
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { StateContext } from '../../GlobalState';
function Main(){

    const context = useContext(StateContext)
    

    const classElement = function(value){
        let result = 'state_item ready';
        if(value === 0){
            result = 'state_item short-time'
        }else if(value === -1){
            result = 'state_item busy'
        }
        return result
    }
    const handleTo = (value) => {
        let to = '';
        if(value === 1){
            to = 'order'
        }
        return to
    }
    return (
        
        <div className="main">
            
            <div className="grid wide">
                <div className="row">
                    {ListYard.map((value, key) => (
                        <div key={key} className="col l-4 m-6 c-12">
                            <div className="yard-item">
                                <div className="yard-item-img" style={{backgroundImage: `url(${value.img})`}}>
                                    
                                    <div className="yard-info">
                                        <div className="overlay"></div>
                                        <div className= {classElement(value.state)}>
                                            {value.status}
                                        </div>
                                    </div>
                                </div>
                                <div className="yard-item-info">
                                    <div className="yard-item-name">
                                        {value.name}
                                    </div>
                                    <div className="item-category">
                                        <div className="categoy-title">Thể loại</div>
                                        <div className="category-number">
                                            Sân {value.category}
                                        </div>
                                    </div>
                                    <div className="yart-item-vote">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <div className="price-item">
                                        <div className="price-title">
                                            Giá : 
                                        </div>
                                        <div className="price-number">{value.price} đ/h</div>
                                    </div>
                                    <Link to={handleTo(value.state)} className= {value.state === 1 ? 'main-order btn-oder' : 'main-order busy-item'}
                                        onClick = {() => {
                                            context.setYard(value)
                                            console.log('tesst-321');
                                        }}
                                    >
                                        Đặt sân
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    
                    
                </div>
                <Outlet />
            </div>

            
        </div>
    )
}
export default Main