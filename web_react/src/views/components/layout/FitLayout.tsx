import { useEffect, useState } from 'react';
import './index.less'

const FitLayout = (props: any) => {
  const defaultSize = {
    width: 1920,
    height: 1080
  }
  const getViewScale = () => {
    let scale = {
      x: window.innerWidth / (props.designSize || defaultSize).width,
      y: window.innerHeight / (props.designSize || defaultSize).height
    }

    return {
      width: '1920px',
      height: '1080px',
      transform: `scale(${scale.x}, ${scale.y})`
    }
  }

  const [designSize, setDesignSize] = useState(getViewScale())

  const resetWindow = () => {
    setDesignSize(getViewScale());
  }
  window.onresize = resetWindow;
  
  useEffect(() => {
  })

  return (
    <div
      style={designSize}
      className="fit-layout"
    >
      { props.children }
    </div>
  );
}

export default FitLayout