
const Button = ({color,text,onClick}) => {
   
    return (
        <button 
        className= "btn"
        onClick ={onClick}
        style ={{backgroundColor: color}}
        className ="btn"> 
        {text}
        </button> 
    )
    
}
export default Button;
