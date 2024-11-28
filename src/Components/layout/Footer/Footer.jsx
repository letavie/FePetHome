import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Footer.css"
import { Box } from "@mui/material";
import Text from "../../Atom/Text/Text";
function Footer() {
    return (
        <div className="footer-container">
            <Box className="footer-hotline">
                <Text
                    content={"Hotline hỗ trợ 24/7 của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn | 0898520760"}
                    className={"footer-hotline-text"}
                />
            </Box>
            <div className="footer-detail">
                <div className="footer-left">
                    <div className="footer-detail-title1">
                        <Text
                            content={"PET HOME"}
                            className={"footer-detail-title"}
                        />
                    </div>
                    <div >
                        <Text
                            content={"Pet Home đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. Với nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Khách sạn thú cưng, dịch vụ khám ,..."}
                            className={"footer-detail-infor"}
                        />
                    </div>
                    <div className="footer-icons">
                        <InstagramIcon className="cursor-pointer hover:text-blue-400" />
                        <EmailIcon className="cursor-pointer  hover:text-blue-400"/>
                        <FacebookIcon className="cursor-pointer  hover:text-blue-400"/>
                        <LocalPhoneIcon className="cursor-pointe  hover:text-blue-400r"/>
                    </div>
                </div>

                <div className="footer-left">
                    <div className="footer-detail-title1">
                        <Text
                            content={"DICH VU"}
                            className={"footer-detail-title"}
                        />
                    </div>
                    <div >
                        <Text
                            content={"Spa thú cưng chuẩn 5 sao, Khách sạn thú cưng chuẩn 5 sao, Cung câp sản phẩm và thức ăn dánh cho thứ cưng, Dịch vụ khám và chữa bênh tận tình "}
                            className={"footer-detail-infor"}
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Footer