export default () => (
  <style jsx global>{`
    #nprogress {
      pointer-events: none;
    }
    
    #nprogress .bar {
      background: #29d;
    
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
      box-shadow: 0 0 10px #29d, 0 0 5px #29d;
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
      border-top-color: #29d;
      border-left-color: #29d;
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
    
    .slider-primary .slick-slide {
      height: 500px;
      text-align: center;
      line-height: 160px;
      background: #fff;
      overflow: hidden;
    }
    
    .slider-thumb .slick-slide {
      text-align: center;
      height: 100px;
      line-height: 160px;
      background: #fff;
      overflow: hidden;
    }
    
    
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    } 
  `}</style>
)