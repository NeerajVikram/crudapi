import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, show }) => {
    
    return (
    <header className='header'>
        <h1>{title}</h1>
       <Button color={show ? 'red':'green'} text={show ? 'Close' : 'New Product' } 
            onClick={onAdd}/>
       
    </header>


    )
}

Header.defaultProps={
    title:'Products',
}

Header.propTypes={
    title: PropTypes.string.isRequired,
}


export default Header
