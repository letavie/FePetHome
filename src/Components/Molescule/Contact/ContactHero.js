import React from "react";
import "./ContactHero.scss"
import Text from "Components/Atom/Text/Text";
function ContactHero() {
    return (
        <div className="contact-hero">
            <div className="contact-hero-content">
                <Text
                    content={"Liên hệ với chúng tôi"}
                    className={"hero-text"}
                />
            </div>
        </div>
    )
}
export default ContactHero