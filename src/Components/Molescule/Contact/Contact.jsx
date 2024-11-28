import React from "react";
import ContactHero from "./ContactHero";
import "./Contact.scss"
import StoreIcon from '@mui/icons-material/Store';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    return (
        <div>
            <div className="contact-img">
                <ContactHero />
            </div>
            <div className="contact-container">
                <div className="contact-info-left">
                    <div className="contact-info px-7">
                        <p className="contact-lienhe">liên hệ</p>
                        <p className="contact-intro">Hãy ghé thăm <span>Pet Home</span> nhé</p>
                    </div>
                    <div className="contact-underline">
                        {/* underline */}
                    </div>
                    <div className="contact-introduction px-7 mb-10">
                        <p>
                            <span>Pet Home</span> ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà
                            chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của mọi nhà. Với hơn nhiều năm kinh nghiệm trong ngành dịch
                            vụ thú cưng bao gồm: Spa thú cưng, Thú y, Sản phẩm dành cho thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi dạo,
                            Cung cấp các dòng thú cưng chuyên nghiệp…
                        </p>
                    </div>
                    <div className="px-7 text-grey ">
                        <div className="flex gap-3 mb-3 cursor-pointer hover:text-blue-400"><StoreIcon /> FPT UNIVERSITY</div>
                        <div className="flex gap-3 mb-3 cursor-pointer hover:text-blue-400"><LocalPhoneIcon />19009999999</div>
                        <div className="flex gap-3 mb-3 cursor-pointer hover:text-blue-400"><EmailIcon />PetHome123@gmail.com</div>
                    </div>
                </div>
                <div className="contact-info-right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Họ Tên <span className="required">*</span></label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Lời nhắn <span className="required">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Gửi yêu cầu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact 