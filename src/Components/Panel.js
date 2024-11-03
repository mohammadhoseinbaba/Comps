import classNames from 'classnames'

function Panel({children , className , ...rest}){
const finalClassNames = classNames(
    'border shadow p-3 bg-white w-full',
    className
)
return <div {...rest} className={finalClassNames}>{children}</div>

}
export default Panel