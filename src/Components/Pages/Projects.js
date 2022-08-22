import {Card,Badge} from 'react-bootstrap'
import { Info } from '../Info'
import {Link} from 'react-router-dom'
export default function Projects(props){
    
    const proj = Info.map( item =>{
        console.log(item.skills)
        return(
            <div key={item.id} className='col-12 col-md-5 col-lg-3 mx-auto text-center mb-5'>
                <Link to={item.website} className={props.setTheme.a} >
                    <Card  className={props.setTheme.Navlink}>
                        <Card.Img src={item.image}/>
                        <Card.Body className='cardbody'>
                            <Card.Title> {item.name}</Card.Title>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.react}</Badge> 
                            <Badge pill bg='danger' className='mx-1'>{item.skills.redux}</Badge> 
                            <Badge pill bg='danger' className='mx-1'>{item.skills.bs}</Badge>
                            <Badge pill bg='danger' className='mx-1'>{item.skills.rest}</Badge>  
                        </Card.Body>

                    </Card>
                </Link>
            </div>
            
        )
    })
    return(
        <div className='container my-5 row mx-auto'>
            {proj}
            
        </div>
    )
}