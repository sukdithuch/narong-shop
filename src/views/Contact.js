import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <div className="Contact container-xxl">
            <h1>ร้านครูณรงค์</h1>
            <h3>ลูกค้าสามารถมาซื้อสินค้าได้ที่ร้าน โดยร้านตั้งอยู่ที่ 44 ม.8 ต.สระสี่มุม อ.กำแพงแสน จ.นครปฐม 73140</h3>
            <h3>ติดต่อสอบถามเพิ่มเติม</h3>
            <h3><FontAwesomeIcon icon={faFacebookF} /> Narong Shop</h3>
            <h3><FontAwesomeIcon icon={faTwitter} /> Narong Shop</h3>
            <h3><FontAwesomeIcon icon={faInstagram} /> Narong Shop</h3>
            <h3><FontAwesomeIcon icon={faEnvelope} /> Narong_Shop@mail.com</h3>
            <h3><FontAwesomeIcon icon={faPhone} /> 0897654321</h3>
        </div>
    );

}

export default Contact;

