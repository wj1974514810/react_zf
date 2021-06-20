import React,{useState} from 'react';
import styles from "./ZFNav.module.scss"
import zz from "../../assests/images/zf.png"
import hz from "../../assests/images/hz.png"
import dt from "../../assests/images/dt.png"
import cz from "../../assests/images/cz.png"
const ZFNav = () => {
    let [navs,setNavs]=useState([
        {
            id:1,
            text:"整租",
            img:zz
        },
        {
            id:2,
            text:"合租",
            img:hz
        },
        {
            id:3,
            text:"地图找房",
            img:dt
        },
        {
            id:4,
            text:"去出租",
            img:cz
        }
    ])
    return (
        <div className={styles.nav}>
            {
                navs.map((v,index)=>{
                    return<div className={styles.navItem} key={v.id}>
                        <img src={v.img} className={styles.navItemImg} alt="" />
                        <span className={styles.navItemText}>{v.text}</span>
                    </div>
                })
            }
        </div>
    );
}

export default ZFNav;
