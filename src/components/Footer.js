import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
            <div>
                <h3>Kurumsal</h3>
                <span>Kurumsal</span>
                <span>Yayın Evleri</span>
                <span>İşlem Rehberi</span>
                <span>KVKK</span>
                <span>İletisim</span>
            </div>
            <div>
            <h3>Kategoriler</h3>
                <span>Edebiyat</span>
                <span>Roman</span>
                <span>Hikaye</span>
                <span>Polisiye</span>
                <span>Bilim-Kurgu</span>
                <span>Kırtasiye</span>
                <span>Tarih</span>
            </div>
            <div>
            <h3>Yardım</h3>
                <span>Sipariş Takibi</span>
                <span>Teslimat Koşulları</span>
                <span>Değişim ve İade Şartları</span>
                <span>Ödeme Seçenekleri</span>
                <span>Üyelik Hakkında</span>
                <span>Gizlilik</span>
                <span>Güvenli Alışveriş</span>
            </div>
            <div>
            <h3>Bize Ulaşın</h3>
                <span>Eryaman No:1/Etimesgut/Ankara</span>
                <span>0850 663 63 63</span>
                <span>Book Shop</span>
                <span>
                    <i style={{color:'blue'}} className="fab fa-facebook"></i>
                    <i style={{color:'lightblue'}} className="fab fa-twitter"></i>
                    <i style={{color:'red'}} className="fab fa-youtube"></i>
                    <i style={{color:'brown'}} className="fab fa-instagram"></i>
                </span>
            </div>
        </div>
      
    )
}

export default Footer