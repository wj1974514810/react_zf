import React, { Component } from "react";
// 1. 引入字体图标
import "../../assests/iconfont.css";
// import "./tabbar.scss";
import styles from "./tabbar.module.scss"
class App extends Component {

  handleClick = (e) => {
    let {tab} = e.currentTarget.dataset;
    // console.log(e);
    /*
    /   => home 
    search => search
    info => info
    my => my
    */
    // console.log(this.props);
    if(tab === "home"){
      this.props.history.push("/");
    }else{
      this.props.history.push(tab);
    }
    // console.log(tab);
  }
  render() {
    // console.log(this.props);
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {this.props.children}
        </div>
        <div className={styles.myTabbar}>
          <div onClick={this.handleClick} data-tab="home" className={styles.myTabbarItem + " " + (this.props.tab==="home"? styles.active:'')}>
            <i className="iconfont icon-shouye"></i>
            <span className={styles.text}>首页</span>
          </div>
          <div onClick={this.handleClick} data-tab="search" className={styles.myTabbarItem + " " + (this.props.tab==="search"? styles.active:'')}>
            <i className="iconfont icon-sousuo"></i>
            <span className={styles.text}>找房</span>
          </div>
          <div onClick={this.handleClick} data-tab="info" className={styles.myTabbarItem + " " + " " + (this.props.tab==="info"? styles.active:'')}>
            <i className="iconfont icon-zixun"></i>
            <span className={styles.text}>资讯</span>
          </div>
          <div onClick={this.handleClick} data-tab="my" className={styles.myTabbarItem + " " + (this.props.tab==="my"? styles.active:'')}>
            <i className="iconfont icon-wode"></i>
            <span className={styles.text}>我的</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;