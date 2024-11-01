import className from 'classnames'    

function Button ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded ,
    outline,
    ...rest
}){
    const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-black': primary ,
         'border-blue-900 bg-gray-500 text-black':secondary,
          'border-blue-900 bg-green-500 text-white':success,
           'border-blue-500 bg-red-500 text-white':warning,
           'rounded-full':rounded,
           'bg-white':outline
    })
    return (
    <button {...rest} className={classes}>{children}</button> 
 
)
}

export default Button