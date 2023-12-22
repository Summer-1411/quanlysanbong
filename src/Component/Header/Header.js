import './Header.css'
function Heading(){
    return (
        <div className="container">
            <div className="header">
                <div className="logo">

                </div>
                <div className="header_name">
                    <div className="name_football_pitches">
                        Sân vận động Santiago Bernabéu
                    </div>
                    <div className="name_header_slogan">
                        Hala Madrid
                    </div>
                </div>

            </div>
            <div className="nav">
                <div className="menu">
                <i className="bi bi-justify"></i>
                    Menu
                </div>
                <div className="link_list">
                    <div className="link_icon">
                        Về chúng tôi
                    </div>
                    <div className="link_icon">
                        Liên hệ
                    </div>
                    <div className="link_icon">
                        Đăng nhập
                    </div>
                    <div className="link_icon">
                        Đăng kí
                    </div>
                    <div className="link_icon">
                        Đăng nhập admin
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Heading