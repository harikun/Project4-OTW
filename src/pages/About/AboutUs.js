import React, { Component } from 'react'
import Content from '../Home/Content'
import lokasi from '../../Asset/Images/lokasi.jpg'
import home from '../../Asset/Images/home.jpg'
import Maps from '../About/Maps'


export class AboutUs extends Component {
    state = {
        contents: [
            {
                caption: 'Sejarah',
                description: 'Diawali dengan mulai bermunculan ojek online di Indonesia para pemuda kreatifini berinisiatif untuk mendirikan ojek online dengan memanfaatkan whatsapp sebagai sarana untuk menghubungkan driver dan pelanggan.',
                gambar: lokasi,
                id:'5'
            },
            {
                caption: 'Lokasi',
                description: 'Kami beralamat di Lrg. 5 No.5, Cepu, Kec. Cepu, Kabupaten Blora, Jawa Tengah 58112. OTW beroperasi setiap hari pukul 7.30 - 19.00 WIB. Beroperasi di kec. Cepu kab Blora dan Kec. Padangan Kab. Bojonegoro.',
                gambar: home,
                id:'6'
            }
        ]
    }

    render() {
        return (
            <div className="container">
            <h1>About Us</h1>
                <Content contents={this.state.contents} />
            <Maps
                google="OTW"
            />

        </div>

        )
    }
}

export default AboutUs
