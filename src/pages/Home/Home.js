import React, { Component } from 'react'
import Content from './Content'
import pasar from '../../Asset/Images/pasar.jpg'
import warung from '../../Asset/Images/warung.jpg'
import car from '../../Asset/Images/car.jpg'
import drink from '../../Asset/Images/drink.jpg'
export class Home extends Component {
    state = {
        contents : [
            {   caption: 'Shopping ke pasar? bukan masalah. Driver kami siap melakukannya',
                description: 'Pengen belanja kepasar tapi males antri dan desak-desakan? Siapkan daftar belanjaannya dan biarkan Driver kami menggantikan anda berbelanja dipasar',
                gambar: pasar,
                id:'1'
            },
            {   caption: 'OTW FOOD, bisa delivery food dari warung-warung langganan anda.',
                description: 'Kami memiliki banyak mitra warung makanan yang siap memanjakan rasa lapar anda. Pesan OTW FOOD untuk memilih makanan kesukaan anda ',
                gambar: warung,
                id:'2'
            },
            {   caption: 'OTW DRINK saat haus',
                description: 'Siang-siang panas dan kehausan, pengen nyari yang dingin-dingin, OTW DRINK aja. Tinggal pilih minuman yang kamu suka',
                gambar: drink,
                id:'3'
            },
            {   caption: 'OTW CAR',
                description: 'Jalan-jalan bareng temen lebih enak rame-rame. Pakai OTW CAR bisa jalan-jalan rame-rame tanpa takut panas dan kehujanan.',
                gambar: car,
                id:'4'
            }
            
        ]
    }

    render() {
        return (
            <div>
                <h1>Kenapa Online Trans Walk?</h1>
                <Content contents={this.state.contents} />
            </div>
        )
    }
}

export default Home