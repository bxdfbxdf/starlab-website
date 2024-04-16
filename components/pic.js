const Pic = (props) => {

  const {src, ...rest} = props

  const servedSrc = src.replace('/public', '')

  return (
    <div className={'image-container'}>
        <img src={servedSrc} alt={servedSrc} {...rest}/>
    </div>
  )
}

export default Pic 