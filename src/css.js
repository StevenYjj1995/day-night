const string = `/** 你好，我叫叶健杰
 ** 首先消除一下默认样式
 **/
.day, .night {
  box-sizing: border-box
}

.day * {
  box-sizing: border-box;
}

.night * {
  box-sizing: border-box;
}

.day *::before, .night *::before,
.day *::after, .night *::after {
  box-sizing: border-box;
}

.day *, .night * {
  margin: 0;
  padding: 0;
}

/** 接下来让我把白天和黑夜分开
 **/
.day {
  display: inline-block;
  width: 50%;
  height: 50vh;
  background: #0093ff;
  position: relative;
}

.night {
  position: relative;
  float: right;
  width: 50%;
  height: 50vh;
  background: #0a0e28;
}

.day::before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-width: 12.5vh;
  border-style: solid;
  border-color: #0a0e28 #0a0e28 transparent transparent;
  right: 0;
  top: 0;
}

.night::before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-width: 12.5vh;
  border-style: solid;
  border-color: transparent transparent #0093ff #0093ff;
  left: 0;
  bottom: 0;
}

/** 先画出来太阳吧
 **/

.sun {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 12.5vh;
  height: 12.5vh;
}

/** 神说，要有光
 **/

.sun .rays,
.sun .rays::before,
.sun .rays::after {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  background-color: #ffb02b;
}

.sun .rays::before {
  content: "";
  transform: rotate(30deg);
}

.sun .rays::after {
  content: "";
  transform: rotate(60deg);
}
/** 给太阳画上脸吧
 **/
.sun .face {
  position: relative;
  margin: -10%;
  width: 120%;
  height: 120%;
  border-radius: 100%;
  background-color: #ffb02b;
}

.sun .face::before {
  content: "";
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  border-radius: 100%;
  background-color: #ffec00;
}
/** 眼睛
 **/
.sun .face .eye {
  position: absolute;
  top: 40%;
  width: 7%;
  height: 7%;
  border-radius: 100%;
  background-color: #756b01;
  transform: translateY(-50%);
  animation: sunblink 5s infinite;
}

.sun .face .left.eye {
  left: 25%;
}

.sun .face .right.eye {
  right: 25%;
}

.sun .face .cheek {
  position: absolute;
  top: 46%;
  width: 4%;
  height: 4%;
  border-radius: 100%;
  background-color: rgba(255, 176, 43, 0.6);
  transform: scale(2.5, 0.75);
}

.sun .face .left.cheek {
  left: 25%;
}

.sun .face .right.cheek {
  right: 25%;
}
/** 嘴巴
 **/
.sun .face .mouth {
  position: absolute;
  top: 42%;
  left: 35%;
  width: 30%;
  height: 16%;
  border-radius: 20% 20% 60% 60% / 30% 30% 100% 100%;
  background-color: #756b01;
  overflow: hidden;
  transform: translate(0);
}

.sun .face .mouth::after {
  content: "";
  position: absolute;
  top: 30%;
  left: 15%;
  width: 70%;
  height: 100%;
  border-radius: 100%;
  background-color: #f04e50;
}
/** 接着来画月亮吧
 **/
.moon {
  position: absolute;
  bottom: 60%;
  left: 50%;
  transform: translateX(-50%);
  height: 12.5vh;
  width: 12.5vh;
  background: #EAEAEA;
  border-radius: 50%;
  box-shadow: inset -15px 0 6px #BFBFBF, 0 0 8px #EAEAEA;
}
/** 环形山是月亮的特征，可不能漏了哦
 **/
.moon .craters {
  position: absolute;
  top: 20%;
  left: 20%;
  height: 20%;
  width: 20%;
  background: #BFBFBF;
  border-radius: 50%;
  box-shadow: inset -1px 0 1px #9E9E9E;
  opacity: 0.4;
}

.moon .craters::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: #BFBFBF;
  top: -15%;
  right: -145%;
  height: 60%;
  width: 60%;
  box-shadow: inset -1px 0 1px #9E9E9E;
}

.moon .craters::after {
  content: "";
  border-radius: 50%;
  position: absolute;
  background: #BFBFBF;
  top: 200%;
  left: 250%;
  height: 40%;
  width: 40%;
  box-shadow: inset -1px 0 1px #9E9E9E;
}
/** 眼睛
 **/
.eye-left,
.eye-right {
  position: absolute;
  bottom: 30%;
  height: 15%;
  width: 9%;
  background: #333;
  border-radius: 50%;
  animation: moonblink 4s linear infinite;
}

.eye-left::before,
.eye-right::before {
  position: absolute;
  display: block;
  content: "";
  top: 1px;
  right: 2px;
  height: 8px;
  width: 4px;
  background: #EAEAEA;
  border-radius: 50%;
}

.eye-left {
  left: 10%;
}

.eye-right {
  bottom: 25%;
  left: 30%;
}
/** 有月亮怎么能没有星星呢
 **/
.stars {
  position: absolute;
  top: 20%;
  left: calc((100% - 45%) / 2);
  height: 15vh;
  width: 22vw;
}

.stars .top,
.stars .top::before,
.stars .top::after,
.stars .left,
.stars .left::before,
.stars .left::after,
.stars .bottom,
.stars .bottom::before,
.stars .bottom::after,
.stars .right {
  background: #EFE894;
  border-radius: 50%;
}

.stars .top {
  position: absolute;
  top: 0;
  left: -10%;
  height: 6px;
  width: 6px;
  box-shadow: 0 0 5px #EFE894;
}

.stars .top::before {
  position: absolute;
  display: block;
  content: "";
  top: 500%;
  left: 1530%;
  height: 8px;
  width: 8px;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .top::after {
  position: absolute;
  display: block;
  content: "";
  top: 100%;
  left: 1530%;
  height: 6px;
  width: 6px;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .left {
  position: absolute;
  top: 20%;
  left: -25%;
  height: 8px;
  width: 8px;
  box-shadow: 0 0 5px #EFE894;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .left::before {
  position: absolute;
  display: block;
  content: "";
  top: 500%;
  left: 200%;
  height: 6px;
  width: 6px;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .left::after {
  position: absolute;
  display: block;
  content: "";
  top: 300%;
  left: -140%;
  height: 6px;
  width: 6px;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .bottom {
  position: absolute;
  bottom: 20%;
  right: 28%;
  height: 6px;
  width: 6px;
  box-shadow: 0 0 5px #EFE894;
}

.stars .bottom::before {
  position: absolute;
  display: block;
  content: "";
  height: 8px;
  width: 8px;
  bottom: -110%;
  right: 400%;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .bottom::after {
  position: absolute;
  display: block;
  content: "";
  height: 6px;
  width: 6px;
  top: 300%;
  right: 700%;
  box-shadow: 0 0 5px 1px #EFE894;
}

.stars .right {
  position: absolute;
  bottom: 25%;
  right: 10%;
  height: 10px;
  width: 10px;
  box-shadow: 0 0 5px 1px #EFE894;
}
/** 最后，给它们加点动画，让他们动起来吧
 **/
.sun .rays {
  animation: spin 10s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.stars .top,
.stars .top::before,
.stars .top::after,
.stars .left,
.stars .left::before,
.stars .left::after,
.stars .bottom,
.stars .bottom::before,
.stars .bottom::after,
.stars .right {
  animation: glow 5s linear infinite;
}

@keyframes glow {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

@keyframes moonblink {
  5%, 10% {
    height: 1px;
  }
  10% {
    height: 15%;
  }
}

@keyframes sunblink {
  0% {
    height: 1%;
  }
  2% {
    height: 7%;
  }
  100% {
    height: 7%;
  }
}
/** 热情活力的白天，和温柔静谧的夜晚，你喜欢哪个呢？
 **/
`
export  default  string