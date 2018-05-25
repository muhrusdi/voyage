import philosopherB from '../static/fonts/Philosopher-Bold.ttf'
import philosopherI from '../static/fonts/Philosopher-Italic.ttf'
import philosopherR from '../static/fonts/Philosopher-Regular.ttf'

export default () => (
  <style jsx global>{`
    @font-face {
      font-family: 'Philosopher';
      font-style: normal;
      font-weight: normal;
      src:local('☺︎'), url("${philosopherR}") format("woff"), url("${philosopherR}") format("opentype");
    }

    @font-face {
      font-family: 'Philosopher';
      font-style: normal;
      font-weight: bold;
      src:local('☺︎'), url("${philosopherB}") format("woff"), url("${philosopherB}") format("opentype");
    }

    @font-face {
      font-family: 'Philosopher';
      font-style: italic;
      font-weight: normal;
      src:local('☺︎'), url("${philosopherI}") format("woff"), url("${philosopherI}") format("opentype");
    }

    #nprogress {
      pointer-events: none;
    }
    
    #nprogress .bar {
      background: #F78723;
    
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
    
      width: 100%;
      height: 2px; 
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #F78723, 0 0 5px #F78723;
      opacity: 1.0;
      transform: rotate(3deg) translate(0px, -4px);
    } 
    
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 18px;
      right: 32px;
    }
    
    #nprogress .spinner-icon {
      width: 14px;
      height: 14px;
      box-sizing: border-box;
    
      border: solid 1px transparent;
      border-top-color: #F78723;
      border-left-color: #F78723;
      border-radius: 50%;
      animation: nprogress-spinner 400ms linear infinite;
    }
    
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    } 
  `}</style>
)