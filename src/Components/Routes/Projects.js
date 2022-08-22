import {Card,Badge} from 'react-bootstrap'
import { Info } from '../Info'
export default function Projects(){
    console.log(Info)
    const proj = Info.map( item =>{
        return(
            <Card key={item.id}  className='col-12 col-md-5 col-lg-3 mx-auto text-center mb-5'>
                <Card.Img src={item.image}/>
                <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Badge>React</Badge> <Badge>Bootstrap</Badge> <Badge>Css</Badge>
                </Card.Body>

            </Card>
        )
    })
    return(
        <div className='container my-5 row mx-auto'>
            {proj}
            
        </div>
    )
}