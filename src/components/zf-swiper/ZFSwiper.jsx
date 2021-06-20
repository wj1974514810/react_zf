import React, { Component } from 'react';
// import stayles from "./ZFSwiper.module.scss"
import {Carousel} from 'antd-mobile'
import {getSwiper} from '../../http/home'
import {BASE_URL} from "../../http/baseURL"
class ZFSwiper extends Component {
    state = {
        data: [],
        imgHeight: 176,
      }
      componentDidMount() {
        getSwiper().then(res=>{
            console.log(res);
            this.setState({
                data:res.body
            })
        })
      }
    render() {
        return (
            <div className="zfSwiper">
                <Carousel
                    autoplay={false}
                    infinite
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val.id}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={BASE_URL + val.imgSrc}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default ZFSwiper;
