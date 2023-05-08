import './styles.css';

const item = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0]

function MenuT(){
    return(
        <div className='ContainerT'>
            {item.map(() => (
                <div className='ItemMenu'>
                   inicio
                </div>
            ))}

        </div>
    )
}

export default MenuT;