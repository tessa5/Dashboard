import { Avatar as AntdAvator, AvatarProps } from "antd"

type Props = AvatarProps & {
  name?: string;
}

const CustomAvator = ({name, style, ...rest}: Props) => {
  return (
    <AntdAvator
      alt={name}
      size='small'
      style={{
        backgroundColor: '#526634',
        display: 'flex',
        alignItems: 'center',
        ...style
      }}
      {...rest}
    >{name}</AntdAvator>
  )
}

export default CustomAvator