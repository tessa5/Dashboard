import { Popover } from 'antd'
import CustomAvator from '../custom-avatar'


const CurrentUser = () => {
  return (
    <>
        <Popover
            placement='bottomRight'
            trigger='click'
            overlayInnerStyle={{padding:0}}
            overlayStyle={{zIndex:999}}
        >
          <CustomAvator />
            hola
        </Popover>
    </>
  )
}

export default CurrentUser